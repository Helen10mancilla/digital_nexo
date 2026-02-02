/*************************************
 * 1. CONEXIÓN A SUPABASE
 *************************************/
const supabaseClient = supabase.createClient(
  "https://rqazikgixobvambhewuv.supabase.cot",
  "sb_publishable_-k07xiv9pG_qrzJMgNNPhQ_Vukv_sZt"
);

/*************************************
 * 2. VERIFICAR SI EL HORARIO ESTÁ DISPONIBLE
 *************************************/
async function isSlotAvailable(date, time) {
  const { data, error } = await supabaseClient
    .from("appointments")
    .select("id")
    .eq("date", date)
    .eq("time", time);

  if (error) {
    console.error("Error verificando horario:", error);
    alert("Error al verificar el horario");
    return false;
  }

  return data.length === 0;
}

/*************************************
 * 3. GUARDAR CITA EN SUPABASE
 *************************************/
async function saveAppointment(appointment) {
  const { error } = await supabaseClient
    .from("appointments")
    .insert([appointment]);

  if (error) {
    console.error("Error guardando cita:", error);
    alert("No se pudo guardar la cita");
    return false;
  }

  return true;
}

/*************************************
 * 4. ENVIAR CITA (FORMULARIO)
 *************************************/
const form = document.getElementById("formCita");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const corte = document.getElementById("corte").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  if (!nombre || !corte || !fecha || !hora) {
    alert("Completa todos los campos");
    return;
  }

  // 1️⃣ Verificar disponibilidad
  const disponible = await isSlotAvailable(fecha, hora);

  if (!disponible) {
    alert("Ese horario ya está ocupado, elige otro");
    return;
  }

  // 2️⃣ Crear objeto cita
  const cita = {
    name: nombre,
    service: corte,
    date: fecha,
    time: hora
  };

  // 3️⃣ Guardar en Supabase
  const guardado = await saveAppointment(cita);

  if (!guardado) return;

  // 4️⃣ Enviar WhatsApp automático
  const mensaje = `
💈 Nueva cita agendada
👤 Cliente: ${nombre}
✂️ Servicio: ${corte}
📅 Fecha: ${fecha}
⏰ Hora: ${hora}
`;

  const telefono = "573116457927"; // CAMBIA ESTE NÚMERO
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");

  alert("Cita agendada con éxito");
  form.reset();
});

/*************************************
 * 5. CARGAR AGENDA POR FECHA (ADMIN)
 *************************************/
async function loadAgenda(fecha) {
  const { data, error } = await supabaseClient
    .from("appointments")
    .select("*")
    .eq("date", fecha)
    .order("time", { ascending: true });

  if (error) {
    console.error("Error cargando agenda:", error);
    return;
  }

  console.log("Agenda del día:", data);
}

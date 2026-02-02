const btn = document.getElementById("chatbot-btn");
const chat = document.getElementById("chatbot");
const closeBtn = document.getElementById("close-chat");
const body = document.getElementById("chat-body");

btn.onclick = () => chat.classList.toggle("hidden");
closeBtn.onclick = () => chat.classList.add("hidden");

let booking = {};

function startBooking() {
  body.innerHTML = `
    <div class="bot-msg">¿Cuál es tu nombre?</div>
    <input id="name" placeholder="Tu nombre">
    <button onclick="saveName()">Continuar</button>
  `;
}

function saveName() {
  booking.name = document.getElementById("name").value;
  body.innerHTML = `
    <div class="bot-msg">¿Qué servicio deseas?</div>
    <select id="service">
      <option>Corte clásico</option>
      <option>Corte urbano</option>
      <option>Barba</option>
      <option>Otro</option>
    </select>
    <button onclick="saveService()">Continuar</button>
  `;
}

function saveService() {
  booking.service = document.getElementById("service").value;
  body.innerHTML = `
    <div class="bot-msg">Selecciona fecha y hora</div>
    <input type="date" id="date">
    <input type="time" id="time">
    <button onclick="sendWhatsApp()">Agendar</button>
  `;
}

function sendWhatsApp() {
  booking.date = document.getElementById("date").value;
  booking.time = document.getElementById("time").value;

  const message = `
Hola, quiero agendar una cita 💈

Nombre: ${booking.name}
Servicio: ${booking.service}
Fecha: ${booking.date}
Hora: ${booking.time}
`;

  const phone = "573116457927"; // número del dueño
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function openWhatsApp() {
  window.open("https://wa.me/573116457927", "_blank");
}

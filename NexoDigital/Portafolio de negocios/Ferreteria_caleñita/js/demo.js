let pedido = [];
let total = 0;

function agregarProducto(nombre, precio) {
    pedido.push({ nombre, precio });
    total += precio;
    actualizarPedido();
}

function actualizarPedido() {
    const lista = document.getElementById('listaPedido');
    const totalSpan = document.getElementById('total');

    lista.innerHTML = '';

    pedido.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        lista.appendChild(li);
    });

    totalSpan.textContent = total;
}

function enviarWhatsApp() {
    const nombreCliente = document.getElementById('nombre').value;

    if (!nombreCliente || pedido.length === 0) {
        alert('Completa tu nombre y agrega productos');
        return;
    }

    let mensaje = `Hola, mi nombre es ${nombreCliente}. Quiero hacer el siguiente pedido:%0A`;

    pedido.forEach(item => {
        mensaje += `- ${item.nombre} - $${item.precio}%0A`;
    });

    mensaje += `%0ATotal: $${total}`;

    const telefono = '573000000000'; // CAMBIAR
    const url = `https://wa.me/${telefono}?text=${mensaje}`;

    window.open(url, '_blank');
}

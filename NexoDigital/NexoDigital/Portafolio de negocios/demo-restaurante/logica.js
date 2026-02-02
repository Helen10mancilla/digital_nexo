/* 
  GUÍA PARA AÑADIR PRODUCTOS:
  1. Cada producto debe tener un 'id' ÚNICO (no repetido).
  2. Asegúrate de poner una coma (,) al final de cada objeto { ... }, excepto el último de la lista.
  3. Propiedades obligatorias: id, name, description, price, icon, bgColor.
*/

// Datos del menú
const menuData = {
    entradas: [
        { id: 1, name: "Ceviche de Pescado", description: "Pescado fresco marinado en limón con cebolla, cilantro y ají limo.", price: 8.50, icon: '🍤', bgColor: '#FFEAA7' },
        { id: 2, name: "Tequeños de Queso", description: "Palitos de queso blanco envueltos en masa de trigo, fritos hasta dorar.", price: 7.00, icon: '🍤', bgColor: '#FFEAA7' },
        { id: 3, name: "Guacamole con Totopos", description: "Aguacate molido con tomate, cebolla, cilantro y limón. Acompañado de totopos.", price: 6.50, icon: '🍤', bgColor: '#FFEAA7' },
        { id: 14, name: "Costillas a la BBQ", description: "Costillas en salsa bbq, con cebollin picado.", price: 3.00, Image: '', bgColor: '#FFEAA7' },

    ],
    principales: [
        { id: 4, name: "Lomo Saltado", description: "Lomo de res salteado con cebolla, tomate y ají. Acompañado de arroz y papas fritas.", price: 14.50, icon: '🍛', bgColor: '#FDCB6E' },
        { id: 5, name: "Pollo a la Brasa", description: "Pollo marinado con especias y horneado a la perfección. Acompañado de papas fritas y ensalada.", price: 12.00, icon: '🍛', bgColor: '#FDCB6E' },
        { id: 6, name: "Risotto de Champiñones", description: "Arroz arborio cremoso con champiñones salteados y queso parmesano.", price: 13.00, icon: '🍛', bgColor: '#FDCB6E' },
        { id: 7, name: "Pasta Carbonara", description: "Pasta espagueti con salsa cremosa de huevo, queso pecorino y panceta.", price: 11.50, icon: '🍛', bgColor: '#FDCB6E' }
    ],
    bebidas: [
        { id: 8, name: "Jugo de Maracuyá", description: "Jugo natural de maracuyá recién exprimido, endulzado al gusto.", price: 3.50, icon: '🥤', bgColor: '#74B9FF' },
        { id: 9, name: "Limonada de Menta", description: "Limonada refrescante con hojas de menta fresca y un toque de jengibre.", price: 4.00, icon: '🥤', bgColor: '#74B9FF' },
        { id: 10, name: "Cerveza Artesanal", description: "Selección de cervezas artesanales locales (consultar disponibilidad).", price: 5.00, icon: '🥤', bgColor: '#74B9FF' }
    ],
    postres: [
        { id: 11, name: "Suspiro Limeño", description: "Dulce tradicional peruano a base de manjar blanco y merengue.", price: 6.00, icon: '🍰', bgColor: '#E84393' },
        { id: 12, name: "Brownie con Helado", description: "Brownie de chocolate caliente acompañado de helado de vainilla.", price: 7.50, icon: '🍰', bgColor: '#E84393' },
        { id: 13, name: "Mousse de Maracuyá", description: "Postre ligero y refrescante con el sabor ácido del maracuyá.", price: 5.50, icon: '🍰', bgColor: '#E84393' }
    ]
};

// Estado de la aplicación
const state = {
    cart: [],
    currentCategory: 'all'
};

// Formateador de precio seguro
function formatPrice(price) {
    if (typeof price !== 'number' || isNaN(price)) {
        return "0.00";
    }
    return price.toFixed(2);
}

// Elementos del DOM (Carga después del DOMContentLoaded)
let DOM = {};

function initDOMRefs() {
    DOM = {
        menuItems: document.getElementById('menuItems'),
        cartIcon: document.getElementById('cartIcon'),
        cartCount: document.getElementById('cartCount'),
        cartOverlay: document.getElementById('cartOverlay'),
        closeCart: document.getElementById('closeCart'),
        cartItems: document.getElementById('cartItems'),
        cartTotal: document.getElementById('cartTotal'),
        clearCart: document.getElementById('clearCart'),
        continueOrder: document.getElementById('continueOrder'),
        orderSection: document.getElementById('order'),
        orderSummary: document.getElementById('orderSummary'),
        orderForm: document.getElementById('orderForm'),
        backToMenu: document.getElementById('backToMenu'),
        submitOrder: document.getElementById('submitOrder'),
        categoryButtons: document.querySelectorAll('.category-btn')
    };
}

// Inicialización
document.addEventListener('DOMContentLoaded', function () {
    // AOS init
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    initDOMRefs();
    renderMenu();
    updateCartUI();
    setupEventListeners();

    // Sticky header
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.padding = '5px 0';
        } else {
            header.style.backgroundColor = 'white';
            header.style.backdropFilter = 'none';
            header.style.padding = '0';
        }
    });
});

// Renderizar el menú
function renderMenu() {
    if (!DOM.menuItems) return;
    DOM.menuItems.innerHTML = '';

    let itemsToRender = [];
    if (state.currentCategory === 'all') {
        for (const category in menuData) {
            itemsToRender = itemsToRender.concat(menuData[category]);
        }
    } else {
        itemsToRender = menuData[state.currentCategory] || [];
    }

    itemsToRender.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-img" style="background-color: ${item.bgColor}; display: flex; align-items: center; justify-content: center; font-size: 4rem;">
                ${item.icon}
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name || 'Sin nombre'}</h3>
                    <span class="menu-item-price">$${formatPrice(item.price)}</span>
                </div>
                <p class="menu-item-description">${item.description || ''}</p>
                <button class="add-to-cart" data-id="${item.id}">
                    <i class="fas fa-cart-plus"></i> Agregar al Pedido
                </button>
            </div>
        `;
        DOM.menuItems.appendChild(menuItem);
    });
}

// Lógica de Carrito
function addToCart(id) {
    let product = null;
    for (const category in menuData) {
        const found = menuData[category].find(item => item.id === id);
        if (found) { product = found; break; }
    }

    if (!product) return;

    const existingItem = state.cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showCartNotification();
}

function updateCartUI() {
    if (!DOM.cartCount) return;

    const totalItems = state.cart.reduce((total, item) => total + item.quantity, 0);
    DOM.cartCount.textContent = totalItems;

    if (DOM.cartItems) {
        DOM.cartItems.innerHTML = '';
        if (state.cart.length === 0) {
            DOM.cartItems.innerHTML = '<p style="text-align: center; color: var(--gray); padding: 20px;">Tu carrito está vacío</p>';
            DOM.cartTotal.textContent = '$0.00';
            return;
        }

        let total = 0;
        state.cart.forEach(item => {
            const itemPrice = item.price || 0;
            const subtotal = itemPrice * item.quantity;
            total += subtotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name || 'Sin nombre'}</h4>
                    <p>$${formatPrice(itemPrice)} c/u</p>
                </div>
                <div class="cart-item-actions">
                    <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            DOM.cartItems.appendChild(cartItem);
        });
        DOM.cartTotal.textContent = `$${formatPrice(total)}`;
    }
}

// Globales para los saltos de scopes si es necesario
window.changeQuantity = function (id, change) {
    const item = state.cart.find(item => item.id === id);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(id);
    } else {
        updateCartUI();
    }
};

window.removeFromCart = function (id) {
    state.cart = state.cart.filter(item => item.id !== id);
    updateCartUI();
};

function showCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = '<i class="fas fa-check-circle"></i> ¡Añadido al pedido!';
    document.body.appendChild(notification);

    // El CSS para esto ya está en el HTML o se añade aquí
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Event Listeners y Delegación
function setupEventListeners() {
    // Delegación para botones de menú (dinámicos)
    if (DOM.menuItems) {
        DOM.menuItems.addEventListener('click', (e) => {
            const btn = e.target.closest('.add-to-cart');
            if (btn) {
                const id = parseInt(btn.dataset.id);
                addToCart(id);
            }
        });
    }

    // Navegación Carrito
    if (DOM.cartIcon) DOM.cartIcon.addEventListener('click', () => DOM.cartOverlay.classList.add('active'));
    if (DOM.closeCart) DOM.closeCart.addEventListener('click', () => DOM.cartOverlay.classList.remove('active'));

    // Categorías
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            state.currentCategory = this.dataset.category;
            renderMenu();
        });
    });

    // Vaciar Carrito
    if (DOM.clearCart) {
        DOM.clearCart.addEventListener('click', () => {
            if (confirm('¿Vaciar todo el pedido?')) {
                state.cart = [];
                updateCartUI();
            }
        });
    }

    // Continuar Pedido
    if (DOM.continueOrder) {
        DOM.continueOrder.addEventListener('click', () => {
            if (state.cart.length === 0) return alert('Carrito vacío');
            DOM.cartOverlay.classList.remove('active');
            showOrderForm();
        });
    }

    // Botón Volver al Menú
    if (DOM.backToMenu) {
        DOM.backToMenu.addEventListener('click', () => {
            DOM.orderSection.classList.add('hidden');
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Enviar formulario
    if (DOM.orderForm) {
        DOM.orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            sendWhatsAppOrder();
        });
    }

    // Menú móvil
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Cerrar menú al hacer click en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }

    // Scroll suave para todos los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === "#") return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}

function showOrderForm() {
    if (!DOM.orderSection) return;
    DOM.orderSection.classList.remove('hidden');

    let summaryHTML = `
        <div style="border-bottom: 2px solid var(--primary); margin-bottom: 20px; padding-bottom: 10px;">
            <h4 style="margin:0; font-family: var(--font-heading);">DETALLE DE TU PEDIDO</h4>
        </div>
    `;
    let total = 0;

    state.cart.forEach(item => {
        const itemPrice = item.price || 0;
        const subtotal = itemPrice * item.quantity;
        total += subtotal;
        summaryHTML += `
            <div class="order-summary-item">
                <span><strong>${item.quantity}x</strong> ${item.name || 'Sin nombre'}</span>
                <span>$${formatPrice(subtotal)}</span>
            </div>
        `;
    });

    summaryHTML += `
        <div class="order-summary-item" style="border-top: 1px dashed #ccc; margin-top: 15px; padding-top: 15px; font-size: 1.4rem; font-weight: 700;">
            <span>TOTAL</span>
            <span style="color: var(--primary);">$${formatPrice(total)}</span>
        </div>
    `;

    DOM.orderSummary.innerHTML = summaryHTML;
    DOM.orderSection.scrollIntoView({ behavior: 'smooth' });
}

function sendWhatsAppOrder() {
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;
    const notes = document.getElementById('customerNotes').value;

    let total = 0;
    let itemsText = "";
    state.cart.forEach(item => {
        const itemPrice = item.price || 0;
        const subtotal = itemPrice * item.quantity;
        total += subtotal;
        itemsText += `✅ *${item.quantity}x* ${item.name || 'Sin nombre'} ($${formatPrice(subtotal)})\n`;
    });

    const message = encodeURIComponent(
        `*NUEVO PEDIDO - SABORES DEL VALLE* 🍽️
--------------------------------------
👤 *Cliente:* ${name}
📞 *Teléfono:* ${phone}
📍 *Dirección:* ${address || 'Retiro en local'}
📝 *Notas:* ${notes || 'Sin especificaciones'}

*RESUMEN DEL PEDIDO:*
${itemsText}
--------------------------------------
💰 *TOTAL A PAGAR: $${formatPrice(total)}*
--------------------------------------
¡Gracias por elegirnos! 🧡`
    );

    const whatsappNumber = "3116457927"; // Cambiar por el real
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

    // Resetear después de enviar
    setTimeout(() => {
        state.cart = [];
        updateCartUI();
        if (DOM.orderForm) DOM.orderForm.reset();
        if (DOM.orderSection) DOM.orderSection.classList.add('hidden');

        // Notificar al usuario y volver al inicio
        alert('¡Pedido enviado exitosamente! El carrito ha sido reiniciado.');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
}

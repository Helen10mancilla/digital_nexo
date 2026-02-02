// ===== DATOS DE PRODUCTOS =====
const productos = [
    // Herramientas Manuales
    { 
        id: 1, 
        nombre: "Martillo de Acero Forjado", 
        categoria: "herramientas",
        descripcion: "Martillo profesional con mango de fibra de vidrio y cabeza de acero forjado",
        precio: 45900, 
        imagen: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        stock: 15,
        sku: "HERR-001"
    },
    { 
        id: 2, 
        nombre: "Juego de Destornilladores Profesional", 
        categoria: "herramientas",
        descripcion: "Set de 6 destornilladores con puntas intercambiables",
        precio: 35900, 
        imagen: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        stock: 8,
        sku: "HERR-002"
    },
    { 
        id: 3, 
        nombre: "Alicates de Corte Diagonal", 
        categoria: "herramientas",
        descripcion: "Alicates profesionales para corte preciso de alambre y cables",
        precio: 28900, 
        imagen: "https://images.unsplash.com/photo-1589923186742-a6d5d44b3d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        stock: 12,
        sku: "HERR-003"
    },
    
    // Herramientas Eléctricas
    { 
        id: 4, 
        nombre: "Taladro Percutor 800W", 
        categoria: "electricas",
        descripcion: "Taladro eléctrico de alta potencia con función percutor",
        precio: 189900, 
        imagen: "https://images.unsplash.com/photo-1572981779301-7d5c5c9c9c9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        stock: 5,
        sku: "ELE-001"
    },
    { 
        id: 5, 
        nombre: "Sierra Circular 1800W", 
        categoria: "electricas",
        descripcion: "Sierra circular profesional para cortes precisos en madera",
        precio: 245000, 
        imagen: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        stock: 3,
        sku: "ELE-002"
    },
    
    // Material Eléctrico
    { 
        id: 6, 
        nombre: "Cable THHN Calibre 12", 
        categoria: "material-electrico",
        descripcion: "Cable eléctrico THHN 100m, ideal para instalaciones residenciales",
        precio: 125000, 
        imagen: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        stock: 20,
        sku: "ELEC-001"
    },
    { 
        id: 7, 
        nombre: "Interruptor Simple Legrand", 
        categoria: "material-electrico",
        descripcion: "Interruptor simple de alta calidad marca Legrand",
        precio: 8900, 
        imagen: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        stock: 50,
        sku: "ELEC-002"
    },
    
    // Fontanería
    { 
        id: 8, 
        nombre: "Tubería PVC 1/2\"", 
        categoria: "fontaneria",
        descripcion: "Tubería de PVC para agua, 6 metros de largo",
        precio: 18500, 
        imagen: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        stock: 33,
        sku: "FONT-001"
    },
    { 
        id: 9, 
        nombre: "Grifo Mezclador Cocina", 
        categoria: "fontaneria",
        descripcion: "Grifo mezclador para cocina con acabado cromado",
        precio: 78900, 
        imagen: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        stock: 8,
        sku: "FONT-002"
    },
    
    // Construcción
    { 
        id: 10, 
        nombre: "Cemento Argos 50kg", 
        categoria: "construccion",
        descripcion: "Cemento gris para construcción, alta resistencia",
        precio: 32500, 
        imagen: "https://images.unsplash.com/photo-1596893238273-73e5d7b4c257?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        stock: 100,
        sku: "CONS-001"
    },
    { 
        id: 11, 
        nombre: "Ladrillo Macizo 6 Huecos", 
        categoria: "construccion",
        descripcion: "Ladrillo de arcilla cocida para muros estructurales",
        precio: 850, 
        imagen: "https://images.unsplash.com/photo-1545852521-77e0e7d1f7c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        stock: 5000,
        sku: "CONS-002"
    },
    
    // Más productos para expandir...
    { 
        id: 12, 
        nombre: "Llave Stillson 14\"", 
        categoria: "herramientas",
        descripcion: "Llave ajustable para trabajos de fontanería",
        precio: 42900, 
        imagen: "https://images.unsplash.com/photo-1565689221354-d87f85d4aee2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        stock: 7,
        sku: "HERR-004"
    },
    { 
        id: 13, 
        nombre: "Pintura Latex Interior 1 Galón", 
        categoria: "pintura",
        descripcion: "Pintura látex para interior, acabado mate",
        precio: 68900, 
        imagen: "https://images.unsplash.com/photo-1589923186742-a6d5d44b3d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        stock: 25,
        sku: "PINT-001"
    },
    { 
        id: 14, 
        nombre: "Casco de Seguridad", 
        categoria: "seguridad",
        descripcion: "Casco de seguridad industrial con barbiquejo",
        precio: 24900, 
        imagen: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        stock: 40,
        sku: "SEG-001"
    }
];

// ===== SISTEMA DE CARRITO =====
class Carrito {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('carrito')) || [];
        this.init();
    }
    
    init() {
        this.renderCarrito();
        this.actualizarContador();
    }
    
    agregarProducto(producto) {
        const itemExistente = this.items.find(item => item.id === producto.id);
        
        if (itemExistente) {
            itemExistente.cantidad += 1;
        } else {
            this.items.push({
                ...producto,
                cantidad: 1
            });
        }
        
        this.guardar();
        this.renderCarrito();
        this.actualizarContador();
        this.mostrarNotificacion(`${producto.nombre} agregado al carrito`);
    }
    
    eliminarProducto(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.guardar();
        this.renderCarrito();
        this.actualizarContador();
    }
    
    actualizarCantidad(id, nuevaCantidad) {
        if (nuevaCantidad < 1) {
            this.eliminarProducto(id);
            return;
        }
        
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.cantidad = nuevaCantidad;
            this.guardar();
            this.renderCarrito();
            this.actualizarContador();
        }
    }
    
    vaciarCarrito() {
        this.items = [];
        this.guardar();
        this.renderCarrito();
        this.actualizarContador();
        this.mostrarNotificacion('Carrito vaciado');
    }
    
    calcularTotal() {
        return this.items.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    }
    
    guardar() {
        localStorage.setItem('carrito', JSON.stringify(this.items));
    }
    
    renderCarrito() {
        const container = document.getElementById('cartItems');
        const totalElement = document.getElementById('cartTotal');
        const emptyElement = document.getElementById('cartEmpty');
        
        if (this.items.length === 0) {
            container.innerHTML = '';
            container.appendChild(emptyElement);
            totalElement.textContent = '$0';
            return;
        }
        
        // Ocultar mensaje de vacío
        emptyElement.style.display = 'none';
        
        // Renderizar items
        container.innerHTML = this.items.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image">
                    <img src="${item.imagen}" alt="${item.nombre}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.nombre}</h4>
                    <p class="cart-item-price">$${item.precio.toLocaleString()}</p>
                    <div class="cart-item-controls">
                        <div class="quantity-control">
                            <button class="quantity-btn minus" onclick="carrito.actualizarCantidad(${item.id}, ${item.cantidad - 1})">-</button>
                            <span class="quantity">${item.cantidad}</span>
                            <button class="quantity-btn plus" onclick="carrito.actualizarCantidad(${item.id}, ${item.cantidad + 1})">+</button>
                        </div>
                        <button class="remove-item" onclick="carrito.eliminarProducto(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Actualizar total
        totalElement.textContent = `$${this.calcularTotal().toLocaleString()}`;
    }
    
    actualizarContador() {
        const totalItems = this.items.reduce((total, item) => total + item.cantidad, 0);
        document.getElementById('cartCount').textContent = totalItems;
    }
    
    mostrarNotificacion(mensaje) {
        const notification = document.createElement('div');
        notification.className = 'notification success';
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-check"></i>
            </div>
            <div class="notification-content">
                <h4>¡Producto agregado!</h4>
                <p>${mensaje}</p>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    
    // Función para enviar pedido por WhatsApp
    enviarPedidoWhatsApp() {
        if (this.items.length === 0) {
            this.mostrarNotificacion('Agrega productos al carrito primero');
            return;
        }
        
        let mensaje = `👋 *HOLA! SOLICITO COTIZACIÓN PARA:*\n\n`;
        mensaje += `*FERRETERÍA VILLA RICA*\n`;
        mensaje += `📍 Villa Rica, Cauca\n\n`;
        mensaje += `*📦 MI PEDIDO:*\n`;
        
        this.items.forEach((item, index) => {
            const subtotal = item.precio * item.cantidad;
            mensaje += `\n${index + 1}. *${item.nombre}*\n`;
            mensaje += `   Cantidad: ${item.cantidad}\n`;
            mensaje += `   Precio unitario: $${item.precio.toLocaleString()}\n`;
            mensaje += `   Subtotal: $${subtotal.toLocaleString()}\n`;
            mensaje += `   SKU: ${item.sku}\n`;
        });
        
        mensaje += `\n────────────────────\n`;
        mensaje += `*💰 TOTAL: $${this.calcularTotal().toLocaleString()}*\n\n`;
        mensaje += `*📝 INFORMACIÓN DEL CLIENTE:*\n`;
        mensaje += `Nombre: [POR FAVOR ESCRIBA SU NOMBRE]\n`;
        mensaje += `Teléfono: [SU TELÉFONO]\n`;
        mensaje += `Dirección: [SU DIRECCIÓN PARA ENVÍO]\n\n`;
        mensaje += `*💡 NOTAS ADICIONALES:*\n`;
        mensaje += `[ESCRIBA AQUÍ SUS OBSERVACIONES]\n\n`;
        mensaje += `⏰ *Horario de atención:* L-V 7AM-7PM, Sábados 8AM-4PM\n`;
        mensaje += `📞 *Teléfono:* (602) 123-4567`;
        
        const numeroWhatsApp = '573116457927'; // Cambia este número
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        
        window.open(url, '_blank');
    }
}

// ===== SISTEMA DE PRODUCTOS =====
class SistemaProductos {
    constructor() {
        this.productos = productos;
        this.categoriaActual = 'all';
        this.productosMostrados = 8;
        this.init();
    }
    
    init() {
        this.renderProductos();
        this.setupFiltros();
        this.setupEventos();
    }
    
    renderProductos() {
        const container = document.getElementById('productsGrid');
        const productosFiltrados = this.categoriaActual === 'all' 
            ? this.productos 
            : this.productos.filter(p => p.categoria === this.categoriaActual);
        
        const productosAMostrar = productosFiltrados.slice(0, this.productosMostrados);
        
        container.innerHTML = productosAMostrar.map(producto => `
            <div class="product-card" data-category="${producto.categoria}">
                ${producto.stock < 5 ? '<div class="product-badge warning">Últimas unidades</div>' : ''}
                ${producto.id <= 3 ? '<div class="product-badge">Más Vendido</div>' : ''}
                
                <div class="product-image">
                    <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
                </div>
                
                <div class="product-info">
                    <h3 class="product-title">${producto.nombre}</h3>
                    <p class="product-description">${producto.descripcion}</p>
                    
                    <div class="product-features">
                        <span><i class="fas fa-barcode"></i> ${producto.sku}</span>
                        <span><i class="fas fa-box"></i> Stock: ${producto.stock}</span>
                    </div>
                    
                    <div class="product-price">
                        <span class="price">$${producto.precio.toLocaleString()}</span>
                    </div>
                    
                    <div class="product-actions">
                        <button class="btn btn-outline" onclick="sistemaProductos.agregarAlCarrito(${producto.id})">
                            <i class="fas fa-cart-plus"></i> Agregar
                        </button>
                        <button class="btn btn-whatsapp" onclick="sistemaProductos.pedirIndividual(${producto.id})">
                            <i class="fab fa-whatsapp"></i> Pedir
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Actualizar botón de cargar más
        const loadMoreBtn = document.getElementById('loadMore');
        if (loadMoreBtn) {
            loadMoreBtn.style.display = productosFiltrados.length > this.productosMostrados 
                ? 'flex' 
                : 'none';
        }
    }
    
    setupFiltros() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remover clase active de todos
                filterBtns.forEach(b => b.classList.remove('active'));
                // Agregar clase active al botón clickeado
                btn.classList.add('active');
                // Actualizar categoría
                this.categoriaActual = btn.dataset.category;
                this.productosMostrados = 8;
                this.renderProductos();
            });
        });
    }
    
    setupEventos() {
        const loadMoreBtn = document.getElementById('loadMore');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.productosMostrados += 4;
                this.renderProductos();
                
                // Desplazar suavemente al último producto
                setTimeout(() => {
                    const lastProduct = document.querySelector('.product-card:last-child');
                    if (lastProduct) {
                        lastProduct.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                }, 100);
            });
        }
        
        // Navegación por categorías desde las tarjetas
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('category-link')) {
                    const categoria = card.dataset.category;
                    this.cambiarCategoria(categoria);
                    
                    // Desplazar a productos
                    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
    
    cambiarCategoria(categoria) {
        this.categoriaActual = categoria;
        this.productosMostrados = 8;
        
        // Actualizar botón activo
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.category === categoria) {
                btn.classList.add('active');
            }
        });
        
        // Si la categoría no está en los filtros, mostrar "Todos"
        if (!document.querySelector(`.filter-btn[data-category="${categoria}"]`)) {
            document.querySelector('.filter-btn[data-category="all"]').classList.add('active');
            this.categoriaActual = 'all';
        }
        
        this.renderProductos();
    }
    
    agregarAlCarrito(productoId) {
        const producto = this.productos.find(p => p.id === productoId);
        if (producto) {
            carrito.agregarProducto(producto);
        }
    }
    
    pedirIndividual(productoId) {
        const producto = this.productos.find(p => p.id === productoId);
        if (!producto) return;
        
        let mensaje = `👋 *HOLA! SOLICITO COTIZACIÓN PARA:*\n\n`;
        mensaje += `*FERRETERÍA VILLA RICA*\n`;
        mensaje += `📍 Villa Rica, Cauca\n\n`;
        mensaje += `*📦 PRODUCTO SOLICITADO:*\n\n`;
        mensaje += `*${producto.nombre}*\n`;
        mensaje += `SKU: ${producto.sku}\n`;
        mensaje += `Precio: $${producto.precio.toLocaleString()}\n`;
        mensaje += `Descripción: ${producto.descripcion}\n\n`;
        mensaje += `*📝 INFORMACIÓN DEL CLIENTE:*\n`;
        mensaje += `Nombre: [POR FAVOR ESCRIBA SU NOMBRE]\n`;
        mensaje += `Teléfono: [SU TELÉFONO]\n`;
        mensaje += `Cantidad requerida: [CANTIDAD]\n\n`;
        mensaje += `⏰ *Horario de atención:* L-V 7AM-7PM, Sábados 8AM-4PM`;
        
        const numeroWhatsApp = '573116457927';
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        
        window.open(url, '_blank');
    }
}

// ===== INICIALIZACIÓN =====
let carrito, sistemaProductos;

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar sistemas
    carrito = new Carrito();
    sistemaProductos = new SistemaProductos();
    
    // Configurar carrito
    setupCarrito();
    
    // Configurar menú responsive
    setupMenu();
    
    // Configurar scroll suave
    setupSmoothScroll();
    
    // Configurar botón WhatsApp flotante
    setupWhatsAppFloat();
});

function setupCarrito() {
    const cartBtn = document.getElementById('cartBtn');
    const closeCart = document.getElementById('closeCart');
    const cartSidebar = document.getElementById('cartSidebar');
    const clearCartBtn = document.getElementById('clearCart');
    const sendWhatsAppBtn = document.getElementById('sendWhatsApp');
    
    // Abrir carrito
    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
    
    // Cerrar carrito
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
        document.body.style.overflow = '';
    });
    
    // Vaciar carrito
    clearCartBtn.addEventListener('click', () => {
        if (confirm('¿Estás seguro de vaciar el carrito?')) {
            carrito.vaciarCarrito();
        }
    });
    
    // Enviar por WhatsApp
    sendWhatsAppBtn.addEventListener('click', () => {
        carrito.enviarPedidoWhatsApp();
    });
    
    // Cerrar al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!cartSidebar.contains(e.target) && !cartBtn.contains(e.target)) {
            cartSidebar.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
}

function setupMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.querySelector('.main-nav');
    
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        menuToggle.innerHTML = mainNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setupWhatsAppFloat() {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            if (carrito.items.length > 0) {
                e.preventDefault();
                if (confirm('¿Deseas enviar tu carrito actual por WhatsApp?')) {
                    carrito.enviarPedidoWhatsApp();
                }
            }
        });
    }
}

// ===== FUNCIONES GLOBALES =====
window.pedirProducto = function(nombreProducto) {
    let mensaje = `👋 *HOLA! SOLICITO COTIZACIÓN PARA:*\n\n`;
    mensaje += `*FERRETERÍA VILLA RICA*\n`;
    mensaje += `📍 Villa Rica, Cauca\n\n`;
    mensaje += `*📦 PRODUCTO SOLICITADO:*\n\n`;
    mensaje += `*${nombreProducto}*\n\n`;
    mensaje += `*📝 INFORMACIÓN DEL CLIENTE:*\n`;
    mensaje += `Nombre: [POR FAVOR ESCRIBA SU NOMBRE]\n`;
    mensaje += `Teléfono: [SU TELÉFONO]\n`;
    mensaje += `Cantidad requerida: [CANTIDAD]\n\n`;
    mensaje += `⏰ *Horario de atención:* L-V 7AM-7PM, Sábados 8AM-4PM`;
    
    const numeroWhatsApp = '573116457927'; // Cambia este número
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank');
};

// Exportar para uso global
window.carrito = carrito;
window.sistemaProductos = sistemaProductos;
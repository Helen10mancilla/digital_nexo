 // Sistema de pedidos completo
        let orderItems = {};
        
        // Inicializar todos los items del menú
        const menuItems = [
            { id: 'menu-ejecutivo', name: 'Menú Ejecutivo', price: 15000 },
            { id: 'menu-basico', name: 'Menú Básico', price: 12000 },
            { id: 'plato-principal', name: 'Solo Plato Principal', price: 10000 },
            { id: 'bandeja-paisa', name: 'Bandeja Paisa', price: 25000 },
            { id: 'pechuga', name: 'Pechuga a la Plancha', price: 18000 },
            { id: 'trucha', name: 'Trucha al Ajillo', price: 22000 },
            { id: 'lomo-cerdo', name: 'Lomo de Cerdo', price: 20000 },
            { id: 'churrasco', name: 'Churrasco', price: 28000 },
            { id: 'costillas', name: 'Costillas BBQ', price: 24000 },
            { id: 'jugos', name: 'Jugos Naturales', price: 4000 },
            { id: 'limonada', name: 'Limonada Natural', price: 3500 },
            { id: 'cerveza-nacional', name: 'Cerveza Nacional', price: 4500 },
            { id: 'cerveza-importada', name: 'Cerveza Importada', price: 8000 },
            { id: 'patacones', name: 'Patacones con Hogao', price: 6000 },
            { id: 'empanadas', name: 'Empanadas', price: 5000 },
            { id: 'alitas', name: 'Alitas de Pollo', price: 14000 },
            { id: 'papas', name: 'Papas a la Francesa', price: 5000 }
        ];
        
        // Inicializar orderItems con cantidad 0 para cada item
        menuItems.forEach(item => {
            orderItems[item.id] = { ...item, quantity: 0 };
        });
        
        // Manejar clics en botones de cantidad
        document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', function() {
                const itemName = this.getAttribute('data-item');
                const itemPrice = parseInt(this.getAttribute('data-price'));
                const itemId = findItemIdByName(itemName);
                
                if (!itemId) return;
                
                if (this.classList.contains('plus')) {
                    orderItems[itemId].quantity += 1;
                } else if (this.classList.contains('minus') && orderItems[itemId].quantity > 0) {
                    orderItems[itemId].quantity -= 1;
                }
                
                // Actualizar la cantidad mostrada
                document.getElementById(`qty-${itemId}`).textContent = orderItems[itemId].quantity;
                
                // Actualizar resumen del pedido
                updateOrderSummary();
            });
        });
        
        // Encontrar ID del item por nombre
        function findItemIdByName(name) {
            for (const id in orderItems) {
                if (orderItems[id].name === name) {
                    return id;
                }
            }
            return null;
        }
        
        // Formatear números como moneda colombiana
        function formatCurrency(amount) {
            return new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(amount);
        }
        
        // Actualizar resumen del pedido
        function updateOrderSummary() {
            let subtotal = 0;
            let itemCount = 0;
            let selectedItemsHTML = '';
            
            // Calcular subtotal y construir lista de items seleccionados
            for (const id in orderItems) {
                const item = orderItems[id];
                if (item.quantity > 0) {
                    const itemTotal = item.price * item.quantity;
                    subtotal += itemTotal;
                    itemCount += item.quantity;
                    
                    selectedItemsHTML += `
                        <div class="selected-item">
                            <div class="selected-item-name">
                                <span class="item-quantity">${item.quantity}</span>
                                ${item.name}
                            </div>
                            <div>${formatCurrency(itemTotal)}</div>
                        </div>
                    `;
                }
            }
            
            // Actualizar la lista de items seleccionados
            const selectedItemsList = document.getElementById('selectedItemsList');
            if (itemCount === 0) {
                selectedItemsList.innerHTML = '<p style="text-align: center; color: var(--text-light);">No hay items seleccionados</p>';
            } else {
                selectedItemsList.innerHTML = selectedItemsHTML;
            }
            
            // Calcular costo de envío (promedio $2.500)
            const deliveryCost = 2500;
            const total = subtotal + deliveryCost;
            
            // Actualizar los totales
            document.getElementById('subtotal').textContent = formatCurrency(subtotal);
            document.getElementById('totalAmount').textContent = formatCurrency(total);
            
            // Actualizar título del resumen
            document.querySelector('.summary-title').innerHTML = `Resumen del Pedido <small style="display: block; font-size: 0.8rem; font-weight: normal; margin-top: 0.5rem;">${itemCount} producto${itemCount !== 1 ? 's' : ''}</small>`;
        }
        
        // Manejar envío del formulario a WhatsApp
        document.getElementById('orderForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar que haya al menos un item seleccionado
            let itemCount = 0;
            for (const id in orderItems) {
                if (orderItems[id].quantity > 0) {
                    itemCount += orderItems[id].quantity;
                }
            }
            
            if (itemCount === 0) {
                alert('Por favor, selecciona al menos un producto para tu pedido.');
                return;
            }
            
            // Obtener datos del formulario
            const customerName = document.getElementById('customerName').value;
            const customerPhone = document.getElementById('customerPhone').value;
            const deliveryAddress = document.getElementById('deliveryAddress').value;
            const deliveryTime = document.getElementById('deliveryTime').value || 'Lo más pronto posible';
            const additionalNotes = document.getElementById('additionalNotes').value;
            
            // Validar datos requeridos
            if (!customerName || !customerPhone || !deliveryAddress) {
                alert('Por favor, completa todos los campos requeridos (nombre, teléfono y dirección).');
                return;
            }
            
            // Construir mensaje para WhatsApp
            let message = `*NUEVO PEDIDO - TRILOGÍA RESTAURANTE BAR*\n\n`;
            message += `*Cliente:* ${customerName}\n`;
            message += `*Teléfono:* ${customerPhone}\n`;
            message += `*Dirección:* ${deliveryAddress}\n`;
            message += `*Hora de entrega:* ${deliveryTime}\n\n`;
            message += `*DETALLE DEL PEDIDO:*\n`;
            
            let subtotal = 0;
            for (const id in orderItems) {
                const item = orderItems[id];
                if (item.quantity > 0) {
                    const itemTotal = item.price * item.quantity;
                    subtotal += itemTotal;
                    message += `- ${item.quantity}x ${item.name}: ${formatCurrency(itemTotal)}\n`;
                }
            }
            
            const deliveryCost = 2500;
            const total = subtotal + deliveryCost;
            
            message += `\n*RESUMEN DE PAGO:*\n`;
            message += `Subtotal: ${formatCurrency(subtotal)}\n`;
            message += `Costo de envío: ${formatCurrency(deliveryCost)}\n`;
            message += `*TOTAL: ${formatCurrency(total)}*\n\n`;
            
            if (additionalNotes) {
                message += `*NOTAS ADICIONALES:*\n${additionalNotes}\n\n`;
            }
            
            message += `---\n`;
            message += `*Métodos de pago aceptados:* Efectivo, tarjetas, transferencia\n`;
            message += `*Tiempo estimado de entrega:* 30-45 minutos`;
            
            // Codificar el mensaje para URL
            const encodedMessage = encodeURIComponent(message);
            
            // Número de WhatsApp del restaurante (usando el número del contacto)
            const whatsappNumber = '573116457927';
            
            // Crear URL de WhatsApp
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Abrir WhatsApp en nueva pestaña
            window.open(whatsappURL, '_blank');
            
            // Mostrar confirmación
            alert('¡Pedido preparado! Serás redirigido a WhatsApp para completar el proceso. Solo debes enviar el mensaje.');
            
            // Opcional: Resetear el formulario después de un tiempo
            setTimeout(() => {
                // Resetear cantidades
                for (const id in orderItems) {
                    orderItems[id].quantity = 0;
                    document.getElementById(`qty-${id}`).textContent = '0';
                }
                
                // Resetear formulario
                document.getElementById('orderForm').reset();
                updateOrderSummary();
            }, 3000);
        });
        
        // Smooth scrolling para enlaces de navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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
        
        // Inicializar resumen del pedido
        updateOrderSummary();
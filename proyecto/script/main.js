// const navToggle = document.querySelector(".nav-toggle"); // LLamamos por el nombre de clase
// const navMenu = document.querySelector(".nav-menu"); // LLamamos por el nombre de clase

// navToggle.addEventListener('click', () =>{
//     navMenu.classList.toggle("nav-menu-visible")

//     if (navMenu.classList.contains("nav-menu-visible")){
//         navToggle.setAttribute("aria-label", "Abrir menu")
//     } else
//     navToggle.setAttribute("aria-label", "Cerrar menu")
// }); // Se agrega un "escuchar"

// Función para añadir clase 'visible' al hacer scroll

        // Función para añadir clase 'visible' al hacer scroll
        const sections = document.querySelectorAll('.fade-in');

        const options = {
            threshold: 0.1
        };

        const carrito = [];
        const listaProductos = document.getElementById('listaProductos');
        const contenidoCarrito = document.getElementById('contenidoCarrito');
        const modalCarrito = document.getElementById('modalCarrito');
        const verCarritoBtn = document.getElementById('verCarrito');
        const cerrarModalBtn = document.getElementById('cerrarModal');
        const totalCarrito = document.getElementById('totalCarrito');
        const pagarCarritoBtn = document.getElementById('pagarCarrito');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        // Smooth scroll para la navegación
        // document.querySelectorAll('nav a').forEach(anchor => {
        //     anchor.addEventListener('click', function(e) {
        //         e.preventDefault();
        //         const targetId = this.getAttribute('href');
        //         document.querySelector(targetId).scrollIntoView({
        //             behavior: 'smooth'
        //         });
        //     });
        // });


// Añadir productos al carrito
listaProductos.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        const producto = e.target.parentElement;
        const nombre = producto.getAttribute('data-producto');
        const precio = producto.getAttribute('data-precio');
        carrito.push({ nombre, precio });
        alert(`${nombre} añadido al carrito.`);
    }
});

// Mostrar carrito
verCarritoBtn.addEventListener('click', function() {
    contenidoCarrito.innerHTML = '';
    if (carrito.length > 0) {
        carrito.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nombre} - $${item.precio}`;
            contenidoCarrito.appendChild(li);
        });
    } else {
        contenidoCarrito.textContent = 'Tu carrito está vacío.';
    }
    modalCarrito.style.display = 'block';
});

// Cerrar modal
cerrarModalBtn.addEventListener('click', function() {
    modalCarrito.style.display = 'none';
});

// Cerrar modal al hacer clic fuera del modal
window.addEventListener('click', function(e) {
    if (e.target === modalCarrito) {
        modalCarrito.style.display = 'none';
    }
});


// Añadir productos al carrito
listaProductos.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        const producto = e.target.parentElement;
        const nombre = producto.getAttribute('data-producto');
        const precio = parseFloat(producto.getAttribute('data-precio'));
        carrito.push({ nombre, precio });
        alert(`${nombre} añadido al carrito.`);
    }
});

// Mostrar carrito y calcular total
verCarritoBtn.addEventListener('click', function() {
    contenidoCarrito.innerHTML = '';
    let total = 0;

    if (carrito.length > 0) {
        carrito.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nombre} - $${item.precio}`;
            contenidoCarrito.appendChild(li);
            total += item.precio;
        });
    } else {
        contenidoCarrito.textContent = 'Tu carrito está vacío.';
    }

    totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
    modalCarrito.style.display = 'block';
});

// Cerrar modal
cerrarModalBtn.addEventListener('click', function() {
    modalCarrito.style.display = 'none';
});

// Realizar pago
pagarCarritoBtn.addEventListener('click', function() {
    if (carrito.length > 0) {
        alert(`Pago realizado con éxito. Total pagado: $${carrito.reduce((acc, item) => acc + item.precio, 0).toFixed(2)}`);
        carrito.length = 0;  // Vaciar carrito
        contenidoCarrito.innerHTML = 'Tu carrito está vacío.';
        totalCarrito.textContent = 'Total: $0';
        modalCarrito.style.display = 'none';
    } else {
        alert('No hay productos en el carrito.');
    }
});

// Cerrar modal al hacer clic fuera del modal
window.addEventListener('click', function(e) {
    if (e.target === modalCarrito) {
        modalCarrito.style.display = 'none';
    }
});

document.getElementById('buscarProducto').addEventListener('keyup', function() {
    const filtro = this.value.toLowerCase();
    const productos = document.querySelectorAll('#listaProductos li');

    productos.forEach(function(producto) {
        const nombre = producto.getAttribute('data-producto').toLowerCase();
        if (nombre.includes(filtro)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
});
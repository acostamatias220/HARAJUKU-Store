let carrito = [];


document.querySelectorAll('.botoncarrito').forEach(boton => {
    boton.addEventListener('click', (e) => {
        
        const producto = {
            nombre: e.target.getAttribute('data-nombre'),
            precio: parseFloat(e.target.getAttribute('data-precio'))
        };
        
        
        carrito.push(producto);
        actualizarCarrito();
    });
});


function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');

    
    listaCarrito.innerHTML = '';

    
    let total = 0;
    carrito.forEach(producto => {
        const item = document.createElement('li');
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(item);
        total += producto.precio;
    });

    
    totalCarrito.textContent = total;
}


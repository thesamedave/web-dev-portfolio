let carrito = [];
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total");

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(li);
        total += producto.precio;
    });

    totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
}

const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');
const vaciarCarritoBtn = document.getElementById("vaciar-carrito")

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.classList.contains('boton-eliminar')) {
        eliminarProductoCarrito(event.target.value);
    };
});

vaciarCarritoBtn.addEventListener("click", () => {

        carrito.splice (pintarCarrito.cantidad);


        pintarCarrito(carrito);
        actualizarTotalCarrito(carrito);
});

    // if (event.target.classList.contains("vaciar-carrito")){
    //     vaciarProductoscarrito(event.target.value)
    //     console.log(vaciarcarrito)
    // };


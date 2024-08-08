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
        Toastify({
        text:"producto eliminado",
        duration: 2000,
        gravity:"boton",
        position:"left",
       
    }).showToast();


    };
    
});

vaciarCarritoBtn.addEventListener("click", () => {

    Toastify({
        text:"carrito vaciado",
        duration: 2000,
        gravity:"boton",
        position:"left",
       
    }).showToast();    
    carrito = [] ;
    limpiarHTML();
    document.location.reload(); 
    pintarCarrito(carrito);
    actualizarTotalCarrito(carrito);
});


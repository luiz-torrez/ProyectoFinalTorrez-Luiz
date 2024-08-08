const getProducts = () => {
    fetch ('/stock.json')
    .then((response) => response.json())
    .then((productos)=>{
        pintarProductos(productos)
        
    }) 
}


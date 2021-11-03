//SECCION INCOMPLETA
//
//
//Mostrar productos enviados por BO

let listaProductos; 

if (localStorage.getItem("list") == null){
    alert("Error. No hay productos disponibles")
}else{
    listaProductos = JSON.parse(localStorage.getItem("list"))
}

listaProductos.forEach(element => {
    
});
//SECCION INCOMPLETA
//
//PANEL ADMINISTRADOR
//Entidades con las que voy a trabajar para crear el carrito de compras y el acceso seguro del ususario.

//USUARIO
class Usuario {
    constructor(nombre,clave){
        this.nombre = nombre;
        this.clave = clave; 
    }
}

//PRODUCTO
class Item {
    constructor (nombre,precio,stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

//MEMBRESIA
class Membresia{
    constructor (tipo,precio,descripcion){
        this.tipo = tipo;
        this.precio = Number(precio);
        this.descripcion = descripcion;
    }
}

//Confirmación de acceso para usuario

const usuario = new Usuario("user", "password");

//Creación de los elementos INPUT y BUTTON desde JS
const nodo = document.createElement("input");
nodo.setAttribute("id", "nombre");
nodo.setAttribute("placeholder", "Usuario");
document.getElementById("user").appendChild(nodo);

const nodo1 = document.createElement("input");
nodo1.setAttribute("id", "contrasena");
nodo1.setAttribute("placeholder", "Contraseña");
document.getElementById("user").appendChild(nodo1);

const nodo2 = document.createElement("button"); 
nodo2.type = "button"; 
nodo2.innerText = "Enviar";
nodo2.setAttribute("id", "btn"); 
document.getElementById("user").appendChild(nodo2);

const enviar = document.getElementById("btn");

const accesoCorrecto = () =>{
    enviar.addEventListener("click", ()=>{

        if (nombre === usuario.nombre && clave === usuario.clave){
            let nombre = document.getElementById("nombre").value;
            let clave = document.getElementById("contrasena").value;

        }else{
            alert("EL USUARIO NO EXISTE")
        }
        
    })
};

    //Función factory para crear productos
    const crearItem = (nombre, precio, stock) =>{
        const producto = new Item (nombre, precio, stock);
        return producto
    }



    
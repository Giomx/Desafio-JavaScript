alert("******BIENVENIDO A LA TIENDA VIRTUAL******");
alert("Presiona enter para ingresar");

class producto {
    constructor (id, nombre, tamaño, precio, disponible){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.disponible = true;

    }
    sumarProducto(){
        return this.precio + this.precio;
    }
    productoStock(){
        this.disponible = false;
    }
}

const carrito = []
let resultado = prompt('Ingrese el nombre del producto: ');
    if (resultado === 'total' || resultado === 'Total'|| resultado === 'TOTAL'){
    }else{
        nombrePro = resultado;
        idPro = +(prompt('Ingrese el id del producto: '))
        precioPro = +(prompt('Ingrese el precio del producto: '))
        carrito.push(new producto(nombrePro, idPro, precioPro));
    }


console.log(carrito);
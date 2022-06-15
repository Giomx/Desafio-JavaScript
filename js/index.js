const productos = [{
    id:1,
    nombre: 'Mezcal de damiana',
    tamaño: "500 ml",
    precio: 80,
},{
    id:2,
    nombre: 'Mezcal jamaica',
    tamaño: "500 ml",
    precio: 100,

},{
    id:3,
    nombre: 'Mezcal de cafe',
    tamaño: "500 ml",
    precio: 120,
},{
    id:4,
    nombre: 'Mezcal de guayaba',
    tamaño: "500 ml",
    precio: 100,
},{
    id:5,
    nombre: 'Mezcal maracuya',
    tamaño: "500 ml",
    precio: 100,
}]

productos.find(producto => {
    console.log(producto.nombre);
});

//Identifar si un umero es par o impar.
/* 
let  numero = parseInt(prompt('Ingresa un numero: '));

for(i = 0; i <= 0; ++i){
    if (numero %2 == 0 ){
        alert(`El numero ${numero} es par: `)
    }else if(numero %2 == 1){
        alert(`El numero ${numero} impar:`)
    } else{
        alert('!El caracter que ingresaste no es un numero!')
    }
} */

//Calcular costo total de productos 
function total(precio, noProductos) {
    return precio * noProductos;
}
for (i = 0; i <=0; i++) {
    let resultado = total(+(prompt("Ingresa el precio del producto: ")), +(prompt("Ingresa el número de productos comprados: ")));
    alert(`El Costo total es: ${resultado}`);
}
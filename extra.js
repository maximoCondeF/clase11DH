//Paso 2:
let arrayDeNumeros = [1,1,2,3,5,8,13,21,34,55];
//Paso 3:
const [posicion0, posicion1, posicion2, posicion3, posicion4, ...resto] = arrayDeNumeros; 
//lo hice de ese modo porque saltarme 1 y 3 me desordenaba el siguiente paso
let nuevoArray = [posicion1,posicion3, ...resto];
//Paso 4:
let mascota = {
nombre : "Olaf",
tipoDeMascota : "Perro",
color : "Negro con motas doradas",
raza : "Boxer"
};
//Paso 4 B:
let {nombre : nombreMascota, tipoDeMascota, color : colorMascota, raza : razaMascota} = mascota;
console.log("Hola les presento a mi mascota su nombre es: " +nombreMascota+", es un hermoso "+ tipoDeMascota +" , de color: "+colorMascota+" y su raza es: "+razaMascota+".");

/* console.log(nuevoArray); 
console.log("Posición 0:", posicion0);
console.log("Posición 2:", posicion2);
console.log("Posición 4:", posicion4);
console.log("Resto de valores:", resto); */
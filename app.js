/* 1. Crear un nuevo archivo (app.js). En este, deberás importar el módulo creado
(collectibles.js).
2. Crear una variable por cada una de las marcas, invocando a la función
(importar) y pasarle como argumento cada una de las marcas de las figuras
coleccionables (hotToys - bandai - starWars).
3. Crear un único array (unifiedCollectibles) con todas las listas de las marcas de
las figuras coleccionables. Usa Spread Operator.
4. Crear un objeto literal (collectibles) que tenga como primer atributo (figuras) y
contenga la lista de todas las figuras importadas.
5. Dentro del objeto literal, crea las funcionalidades solicitadas por el cliente:
a. Desarrollar la funcionalidad (listFigures). Tendrá la responsabilidad de
mostrar al usuario todos los datos de las diferentes figuras almacenadas.
Puedes utilizar los métodos forEach() o for…of().
b. Crear una funcionalidad (figuresByBrand) que reciba por parámetro la
marca de la figura. Tendrá la responsabilidad de retornar todas aquellas
figuras que correspondan a la marca recibida por parámetro. Deberíamos
utilizar el método filter.
c. Comprobar las funcionalidades usando el console.log() e invocando a cada
una de ellas pasando los referidos parámetros. */
//Paso 1:
const importar = require("./collectibles.js");
//Paso 2:
let hotToys = importar("Hot Toys",);
//console.log(hotToys); 
let bandai = importar("Bandai");
//console.log(bandai);
let starWars = importar("Star Wars");
//console.log(starWars);

//Paso 3:
let unifiedCollectibles = [].concat(...hotToys, ...bandai, ...starWars);
//Paso 4:
let collectibles = {
    figuras : unifiedCollectibles,
    //Paso 5: a:
    listFigures : function(){for (let obj of unifiedCollectibles){console.log(obj)}},
    //Paso 5: b:
      figuresByBrand : function(marcaFigura){
    let arrayMarca1 = this.figuras.filter(function(elem){
        return elem.marca == marcaFigura;
    })  
    return arrayMarca1;   
    }
};
//Paso 5: c:
console.log(collectibles.listFigures());
console.log(collectibles.figuresByBrand("Hot Toys"));
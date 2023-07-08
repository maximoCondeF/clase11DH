// Convertir los json a array de objectos:

function importar (...marcasDeseadas) { //marcasDeseadas será un array de strings
  //Este es el paso con el que tengo problemas. El console.log me devuelve undefined. Probé de varias formas.
  return marcasDeseadas.map((marcaDeseada) => {
    const hotToys = require("./datos/figuras1.json");
const bandai = require("./datos/figuras2.json");
const starWars = require("./datos/figuras3.json");
    switch (marcaDeseada) {
      case hotToys[0].marca :
        return hotToys;
        break;
      case bandai[0].marca :
        return bandai;
        break;
      case starWars[0].marca :
        return starWars;
        break;
      default:
        return marcaDeseada+"La marca introducida no existe. Revise la ortografía de la marca";
    }
  });
};
//CÓDIGO PARA DEBUGGING:
//console.log(importar("Hot Toys", "Bandai"));
//El código lo exporté al final! Aquí dejé todas mis notas comentadas e intentos fallidos.


/* const hotToys = require("./datos/figuras1.json");
const bandai = require("./datos/figuras2.json");
const starWars = require("./datos/figuras3.json");
const arrayDeMarcas = [...hotToys,...bandai,...starWars]
function importar(...marcasDeseadas) { //marcasDeseadas será un array de strings
  // Convertir los json a array de objectos:
  //Este es el paso con el que tengo problemas. El console.log me devuelve undefined. Probé de varias formas.
  return marcasDeseadas.map((marcaDeseadita) => {
    switch (marcaDeseadita) {
      case marcaDeseadita === hotToys[0].marca :
        return hotToys;
      case marcaDeseadita === bandai[0].marca :
        return bandai;
      case marcaDeseadita === starWars[0].marca :
        return starWars;
      default:
        return "La marca introducida no existe. Revise la ortografía de la marca";
    }
  });
};
console.log(importar("Hot toys", "Bandai"));
 */ /* 
//CHATGPTADAPTED
function importar(...marcasDeseadas) {
  const hotToys = require("./datos/figuras1.json");
  const bandai = require("./datos/figuras2.json");
  const starWars = require("./datos/figuras3.json");

  var encontrado = [];
  
  marcasDeseadas.map(function(marcaDeseadita){
      let encontrado = [];
  
      for (var obj of hotToys) {
        if (obj.marca === marcaDeseadita) {
          encontrado.push(obj);
          break;
        }
      }
      if (!encontrado) {
        for (var obj of bandai) {
          if (obj.marca === marcaDeseadita) {
            encontrado.push(obj);
            break;
          }else{
            for (var obj of starWars) {
              if (obj.marca === marcaDeseadita) {
                encontrado.push(obj);
                break;
              }
          }
        }
      }
  
      if (!encontrado) {
        encontrado.push("No matching object encontrado for marca: " + marcaDeseadita);
      }
    }
  
    return encontrado;
  })
};
console.log(importar("Hot Toys","Bandai"));

 */
//NOTAS Y ALGUNOS DE LOS CÓDIGOS FALLIDOS:
//función que si string marcaDeseada = string marcaEnItineración retorne array con figuras de marca deseada
//buscarArray marcaDeseada en un switch usando leerMarca
//exportar funcion "importar"


/* CÓDIGOS EN DESUSO */
/* function importar (...marcasDeseadas){//marcasDeseadas será entonces un array de strings
//convertir JSON a array de objetos
const hotToys = require("./datos/figuras1.json");
const bandai = require("./datos/figuras2.json");
const starWars = require("./datos/figuras3.json");
//ver si marcasDeseadas incluye el mismo valor que el primer objeto de Marcas. De ser así, retornar array de objetos del json apropiado
let importarCosas = marcasDeseadas.forEach(({marcaDeseada}) => 
{switch (marcaDeseada) {
  case marcaDeseada == hotToys.map((object) => {return object.marca;}) :
return hotToys;
break;
case marcaDeseada == starWars.map((object) => {return object.marca;}) :
  return starWars;
  break;
case marcaDeseada == bandai.map((object) => {return object.marca;}) :
  return bandai;
  break;
default:
  return "La marca solicitada no existe. Revise la ortografía de la marca."
}});
return importarCosas;
}

console.log(importar("Hot Toys"));
console.log(importar("Great value"));
console.log(importar("bandai"));
 */

/* function importar(...marcasDeseadas) { //marcasDeseadas será un array de strings
  // Convertir los json a array de objectos:
  const hotToys = require("./datos/figuras1.json");
  const bandai = require("./datos/figuras2.json");
  const starWars = require("./datos/figuras3.json");
  //VAMOS BIEN
  //arrayDeseado es una variable que toma el valor del array de objetos que se desea, para poder retornarlo más tarde
  let arrayDeseado = marcasDeseadas.map((marcaDeseada) => {
    for(i = 0; i<= marcasDeseadas.length; i++) {
      switch (marcaDeseada) {
        case marcaDeseada:
          if (hotToys.some((object) => object.marca.includes(marcaDeseada))) {
            return hotToys;
          } else if (starWars.some((object) => object.marca.includes(marcaDeseada))) {
            return starWars;
          } else if (bandai.some((object) => object.marca.includes(marcaDeseada))) {
            return bandai;
          } else {
            return "La marca solicitada no existe. Revise la ortografía de la marca.";
          }
      }
    }
  });
}
console.log(importar(["Hot Toys","Bandai"])); */
/* function leerMarca (arrayMarca){return arrayMarca.map((object) => {return object.marca;})}; 
//alternativa a leerMarca declarada: leerMarca como arrow function
let leerMarca = arrayMarca => {return arrayMarca[0].marca};
*/
/* let figuritasMarcas = marcasDeseadas.filter(({ marca }) => marcasDeseadas.includes(marca));//da true o false */
/* arrayOfObjects.forEach((object) => {
  console.log(object.value); // Output: 10, 20, 30
});*/
//¿crear objeto para poder usar .this?
/* let objetoHotToys = {catalogo : hotToys};
let objetoBandai = {catalogo : bandai}
let objetoStarWars = {catalogo : starWars} */



/* 
 function importar (...marcasFuncion){
  if (marcasFuncion.length <= 1){let marcas = marcasFuncion.filter(function(marcasFuncion) {
    return marcasFuncion.filter.marcas;
  })}else{
    return marcasFuncion.map.filter(function(marquita){
    })
  };
}; */
module.exports = importar
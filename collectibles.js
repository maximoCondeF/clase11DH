// Convertir los json a array de objectos:

function importar (...marcasDeseadas) {
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
        return "La marca introducida no existe. Revise la ortografía de la marca";
    }
  });
};

module.exports = importar
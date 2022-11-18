"use strict";
//Importamos la función getOneCharacter
import { getOneCharacter } from "./getOneCharacter.js";

//Pintar personajes general
const paintAll = (characters) => {
  for (const character of characters) {
    //Crear un Div con la clase "divCharacter" para diferenciar del divAll contenedor y apendearlo a éste."
    const divCharacter$$ = document.createElement("div");
    divCharacter$$.className = "divCharacter";
    const divAll$$ = document.querySelector(".all");
    divAll$$.appendChild(divCharacter$$);

    //Crear un h3, ponerle texto del nombre del personaje y apendearlo al "divCharacter".
    const h3$$ = document.createElement("h3");
    h3$$.textContent = character.apodo;
    divCharacter$$.appendChild(h3$$);

    //Crear un div para poner la imagen de fondo, relacionada con la imagen del personaje en la API, y apendearla al "divCharacter".
    const image$$ = document.createElement("div");
    image$$.classList = "divImg";
    image$$.style.backgroundImage = `url("${character.imagen}")`;
    divCharacter$$.appendChild(image$$);

    //Añadimos un listener para que cuando hagamos click se abra con la información del personaje y pinte el personaje al completo
    divCharacter$$.addEventListener("click", () => {
      getOneCharacter(character);
    });
  }
};

//Exportamos la función
export { paintAll };

"use strict";
//Pintar personajes con características
const getOneCharacter = (character) => {
  //Crear un div con el nombre "divModal" para ponerlo de fondo, le ponemos una clase para poder editarlo en CSS y lo apendeamos al cuerpo. Además, creamos un addEventListener para cerrar el modal completo y volver a mostrar la página general cuando se haga click.
  const divModal$$ = document.createElement("div");
  divModal$$.className = "modal";
  document.body.appendChild(divModal$$);
  divModal$$.addEventListener("click", () => {
    divModal$$.remove();
    divOneCharacter$$.remove();
  });

  //Crear un div con el nombre "divOneCharacter" y la misma clase para darle formato. Además, añadimos la clase "back + casa de Hogwarts" para que salga el color de fondo de cada casa y lo apendeamos al modal
  const divOneCharacter$$ = document.createElement("div");
  divOneCharacter$$.className = "divOneCharacter";
  divOneCharacter$$.classList.add("back" + character.casaDeHogwarts);
  document.body.appendChild(divOneCharacter$$);

  //Crear un h3 con el nombre completo del personaje, le ponemos ese texto y lo apendeamos al divOneCharacter
  const completeName$$ = document.createElement("h3");
  completeName$$.textContent = character.personaje;
  divOneCharacter$$.appendChild(completeName$$);

  //Crear un div para poner la imagen de fondo y con una clase para darle formato, ponemos el fondo con una imagen del personaje en la API, y la apendeamos al "divOneCharacter".
  const imageOneCharacter$$ = document.createElement("div");
  imageOneCharacter$$.classList = "imgOneCharacter";
  imageOneCharacter$$.style.backgroundImage = `url("${character.imagen}")`;
  divOneCharacter$$.appendChild(imageOneCharacter$$);

  //Crear un p con la casa del personaje, le ponemos ese texto y lo apendeamos al divOneCharacter.
  const casa$$ = document.createElement("p");
  casa$$.textContent = character.casaDeHogwarts;
  divOneCharacter$$.appendChild(casa$$);

  //Crear un p con la persona que interpreta al personaje, le ponemos la clase de actor y le ponemos texto y lo apendeamos al divOneCharacter
  const actor$$ = document.createElement("p");
  actor$$.classList = "actor";
  actor$$.textContent = `"Personaje interpretado por: ${character.interpretado_por}"`;
  divOneCharacter$$.appendChild(actor$$);

  //Crear un p para la descendencia. Hacemos un if en el que, si la descendencia tiene una longitud mayor de 0 (que no está vacía), le ponga ese texto y lo apendee al divOneCharacter y, si no tiene descendencia, que elimine este párrafo.
  const children$$ = document.createElement("p");
  if (character.hijos.length > 0) {
    children$$.textContent = `"Descendencia: ${character.hijos}"`;
    divOneCharacter$$.appendChild(children$$);
  } else {
    children$$.remove();
  }
};

//Exportamos la función
export { getOneCharacter };

"use strict";
import "./styles/styles.scss";

//Importamos la función para pintar la lista de todos los personajes y la función para ver al personaje con detalle
import { paintAll } from "./paintAll.js";
import { getOneCharacter } from "./getOneCharacter.js";

//Crear un fetch que traiga los personaje de la API, entonces, espera la respuesta para convertirlo en un json y entonces, pinta los personajes para la vista general".
fetch("https://fedeperin-harry-potter-api.herokuapp.com/personajes")
  .then((resp) => resp.json())
  .then((characters) => paintAll(characters));

//BUSCADOR
//Seleccionamos el form y el input, ponemos un even listener a form mediante el cual, al hacer enviar, suceda un evento que consiste en llamar a la api+el valor que introduce el usuario, convertirlo en un json, traer ese personaje e imprimirlo en la página con la función getOneCharacter, a la que pasamos el personaje completo. Como nos devuelve un array en lugar de un objeto, paso el número del array, que siempre es 0 porque sólo hay un objeto. En el caso de que haya error, que se imprima una frase y después que se limpie el buscador.
const form$$ = document.querySelector(".search");
const input$$ = document.querySelector(".input");
form$$.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(
    "https://fedeperin-harry-potter-api.herokuapp.com/personajes?apodo=" +
      input$$.value
  )
    .then((resp) =>
      resp.json().then((character) => getOneCharacter(character[0]))
    )
    .catch((err) => alert("El nombre introducido no es válido."));
  input$$.value = "";
});

//RANDOMIZADOR
//Seleccionamos el input y el botón, ponemos un even listener al botón mediante el cual, al hacer click, suceda un evento que consiste en crear una variable random con math.random en la que metemos el character.id x 23 (total de personajes), llama a la api, convierte la info en un json, trae ese personaje random y lo imprime en la página con la función getOneCharacter, a la que pasamos el personaje completo.
const random$$ = document.querySelector(".random");
const button$$ = document.querySelector(".button");
button$$.addEventListener("click", (event) => {
  event.preventDefault();
  const characterRandomId = Math.floor(Math.random() * 23);
  fetch(
    "https://fedeperin-harry-potter-api.herokuapp.com/personajes?=id" +
      characterRandomId
  ).then((resp) =>
    resp
      .json()
      .then((character) => getOneCharacter(character[characterRandomId]))
  );
});

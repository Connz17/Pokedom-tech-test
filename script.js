import {pokemonArray} from "./data/pokemon.js";

const cardContainer = document.getElementsByClassName ("card-container")[0]

const search = document.getElementsByTagName("input")[0]



let htmlCode = ``;



pokemonArray.forEach((pokemon) => {
const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

const type = pokemon.types.join(" & ")

    htmlCode = htmlCode +`

    <div class="card"> 
        <img class="card__image" src="${pokemon.sprite}">
        <div class="card__content">
            <div class="card__heading">${name}</div>
            <div class="card__text">${name} (#${pokemon.id}) is a ${type} type pokémon</div>           
        </div>
    </div>`



});  



cardContainer.innerHTML = htmlCode;







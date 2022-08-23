import {pokemonArray} from "./data/pokemon.js";

const cardContainer = document.getElementsByClassName ("card-container")[0]

const search = document.getElementsByTagName("input")[0]
console.log(search);


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

search.addEventListener("blur", (event) => {
    const caught = event.target.value 
    pokemonArray.filter(catchAll)

});

});  



cardContainer.innerHTML = htmlCode;






























// cardContainer.innerHTML = htmlCode;

// console.log(pokemon);
    // // make a div for the card
    // const card = document.createElement("div");
    
    // // Add card div
    // card.innerHTML = `.card__image ${pokemon}`;




    
// pokemonArray.forEach((pokemon) => {
//     console.log(pokemon);
//     // make a div for the card
//     const card = document.createElement("div");
    
//     // Add card div
//     card.innerHTML = `.card__image ${pokemon}`;

//     // 

// });


// const catchAll = (pokemon) => {cardContainer.innerHTML +=

//    ` <div class="card"> 
//         <div class="card__image">${pokemon.sprite}</div>
//         <div class="card__content">
//             <div class="card__heading">${pokemon.name}</div>
//             <div class="card__text">${pokemon.types}</div>           
//         </div>
//     </div>`
// }





// const cardContainer = Array.from(Container)
// console.log(cardContainer);

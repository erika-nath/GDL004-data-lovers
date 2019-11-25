
import POKEMON from './data/pokemon/pokemon.js'
console.log(POKEMON);

import Pokemon from './data/pokemon/pokemon.js'
console.log(Pokemon);

import {filterType} from './data.js'
//console.log();


let poke= filterType(Pokemon);//filterType es nuestro filter y Pokemon es la data con la que trabaja
//console.log(poke)
poke.map((pkm)=>{
  //console.log(pkm)
//let ftp = createElement('span') ya no se va a crear
const template = `<div>${pkm.name}
<img src="${pkm.img}"></img>
</div>`
//ftp.innerHTML=template;
document.getElementById('content').innerHTML += template
});


var fatherVisible = false; // set up a toggle so you can display block and then none.

// listener for any clicks on the document.
document.addEventListener("click", function(e) {
    var clicked = e.target;
    var father = document.getElementById("father");
    //check to see if user clicks outside of the
    if (fatherVisible && clicked != father) {
            father.style.display = "none";
            document.getElementById("button").innerHTML = "Click Me";
            fatherVisible = false;
        }

}, false);

document.getElementById("button").addEventListener("click", function(e) {
    var father = document.getElementById("father");
    e.preventDefault();
    e.stopPropagation();
    if (fatherVisible){
        father.style.display = "none";
      content.innerHTML = "Click Me";
        fatherVisible = false;
    } else {
        father.style.display = "block";
        content.innerHTML = "Opened!";
        fatherVisible = true;
    }
}, false);

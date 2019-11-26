
import POKEMON from './data/pokemon/pokemon.js'
console.log(POKEMON);

import Pokemon from './data/pokemon/pokemon.js'
console.log(Pokemon);

import {filterType} from './data.js'

let poke= filterType(Pokemon);//filterType es nuestro filter y Pokemon es la data con la que trabaja

import {filterWater} from './data.js'

let pokew= filterWater(Pokemon);

//console.log(poke)
/*poke.map((pkm)=>{
  //console.log(pkm)
//let ftp = createElement('span') ya no se va a crear
const template = `<div>${pkm.name}
<img src="${pkm.img}"></img>
<div>${pkm.weaknesses}</div>
</div>`
//ftp.innerHTML=template;
document.getElementById('content').innerHTML += template
});


var contentVisible = false;
document.addEventListener("click", function(e) {
    var clicked = e.target;
    var content = document.getElementById("content");
    if (contentVisible && clicked != content) {
            content.style.display = "none";
            contentVisible = false;
        }

}, false);

document.getElementById("button").addEventListener("click", function(e) {
    var content = document.getElementById("content");
    e.preventDefault();
    e.stopPropagation();
    if (contentVisible){
        content.style.display = "block";
        contentVisible = false;
    } else {
        content.style.display = "none";
        contentVisible = true;
    }
}, false);
*/

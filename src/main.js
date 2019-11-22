
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
}); //En content se muesta el template

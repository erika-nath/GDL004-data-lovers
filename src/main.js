
//import POKEMON from './data/pokemon/pokemon.js'
//console.log(POKEMON);

import Pokemon from './data/pokemon/pokemon.js'
console.log(Pokemon);

import {filterType, ordenName} from './data.js'
//console.log();

let poke= filterType(Pokemon);//filterType es nuestro filter y Pokemon es la data con la que trabaja
ordenName(poke)
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

//function homeIcon() {

  //  document.getElementById('content').style.display = "none";

  //  document.getElementById('home').style.display = 'block';

//}

//document.getElementById('homeBtn').addEventListener('click', homeIcon);
//funcion para cambiar a la pantalla de comparar al darle click en 'compareBtn' se encuentran los selectores
//function compare() {
  //  document.getElementById('home').style.display = "none"; //darle invisibilidad
  //  document.getElementById('content').style.display = "block"; //mostrar el bloque (pantalla/slide)
//}
//document.getElementById('compareBtn').addEventListener('click', compare);

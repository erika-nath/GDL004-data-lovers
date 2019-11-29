import Pokemon from './data/pokemon/pokemon.js'
console.log(Pokemon);
import {filterType, ordenName} from './data.js'//filtro grass
import {filterWater} from './data.js' //filtro water
import {filterRock} from './data.js' //filtro Rock


let poke= filterType(Pokemon);//filterType es nuestro filter y Pokemon es la data con la que trabaja
ordenName(poke)//sort de grass


let pokew= filterWater(Pokemon); //Variable filter water
ordenName(pokew)//sort de agua

let pokeR= filterRock(Pokemon);//filterType es nuestro filter y Pokemon es la data con la que trabaja
ordenName(poke)


//mostrando filtro Grass a HTML class con map
poke.map((pkm)=>{
const template = `<div>${pkm.name}
<img src="${pkm.img}" ></img>
<div>${pkm.weaknesses}</div>
</div>`
document.getElementById('content1').innerHTML += template
}); //En content se muesta el template


//boton grass
var contentVisible = true;
document.addEventListener("click", function(e) {
    var clicked = e.target;
    var content = document.getElementById("content1");
  }, true);

document.getElementById("button").addEventListener("click", function(e) {
    var content = document.getElementById("content1");
    //e.preventDefault();
   e.stopPropagation();
    if (contentVisible){
        content.style.display = "flex";
        contentVisible = false;
    } else {
        content.style.display = "none";
        contentVisible = true;
    }
}, false);//fin boton grass



//mostrando filtro Water a HTML class con map
pokew.map((pkm)=>{
const template1 = `<div class="cardWater">${pkm.name}
<img src="${pkm.img}"></img>
<div>${pkm.weaknesses}</div>
</div>`
document.getElementById('content2').innerHTML += template1
});


//boton water
var contentVisible = true;
document.addEventListener("click", function(e) {
    var clicked = e.target;
    var content = document.getElementById("content2");
  }, true);

document.getElementById("buttonW").addEventListener("click", function(e) {
    var content = document.getElementById("content2");
    e.preventDefault();

   //e.stopPropagation();
   if (contentVisible){
       content.style.display = "flex";
       contentVisible = false;
   } else {
       content.style.display = "none";
       contentVisible = true;

    }
}, false);// fin boton water

//mostrando filtro Rock a HTML class con map
pokeR.map((pkm)=>{
const template2 = `<div>${pkm.name}
<img src="${pkm.img}" ></img>
<div>${pkm.weaknesses}</div>
</div>`
document.getElementById('content3').innerHTML += template2
}); //En content se muesta el template


//boton grass
var contentVisible = true;
document.addEventListener("click", function(e) {
    var clicked = e.target;
    var content = document.getElementById("content3");
  }, true);

document.getElementById("buttonR").addEventListener("click", function(e) {
    var content = document.getElementById("content3");
    //e.preventDefault();
   e.stopPropagation();
    if (contentVisible){
        content.style.display = "flex";
        contentVisible = false;
    } else {
        content.style.display = "none";
        contentVisible = true;
    }
}, false);//fin boton grass

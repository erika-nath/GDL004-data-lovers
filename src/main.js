import Pokemon from './data/pokemon/pokemon.js'
console.log(Pokemon);
import {filterType, ordenName} from './data.js'//filtro grass
import {filterWater} from './data.js' //filtro water


let poke= filterType(Pokemon);//filterType es nuestro filter y Pokemon es la data con la que trabaja
ordenName(poke)//sort de grass


let pokew= filterWater(Pokemon); //Variable filter water
ordenName(pokew)//sort de agua


//mostrando filtro Grass a HTML class con map
poke.map((pkm)=>{
const template = `<div class="card">
<h1>${pkm.name}</h1>
<img src="${pkm.img}"></img>
<p>Weaknesses: ${pkm.weaknesses}</p>
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
    var content2 = document.getElementById("content2");
    var content3 = document.getElementById("content3");
    e.preventDefault();
  // e.stopPropagation();
    if (contentVisible){
        content.style.display = "flex";
        contentVisible = false;
        content2.style.display = "none";
        content3.style.display = "none";

    } else {
        content.style.display = "none";
        contentVisible = true;
        content2.style.display = "none";
        content3.style.display = "none";
    }
}, false);//fin boton grass



//mostrando filtro Water a HTML class con map
pokew.map((pkm)=>{
const template1 = `<div class="card2">
<h1>${pkm.name}</h1>
<img src="${pkm.img}"></img>
<p>${pkm.weaknesses}</p>
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
    var content2 = document.getElementById("content1");
    var content3 = document.getElementById("content3");

    e.preventDefault();

   //e.stopPropagation();
   if (contentVisible){
       content.style.display = "flex";
       contentVisible = false;
       content2.style.display = "none";
       content3.style.display = "none";
   } else {
       content.style.display = "none";
       contentVisible = true;
       content2.style.display = "none";
       content3.style.display = "none";

    }
}, false);// fin boton water

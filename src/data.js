//ESTO ES LO DE ANGIE  NO BORRAR DE 7 A 19
/*export const filterCandy = (Pokemon) => {
const candy= Pokemon.filter( (pkm) => {
  for(let i=0;i<pkm.type.length;i++){
  if(pkm.type[i] === 'Grass'){
      return pkm;
    }
  }
});
console.log(candy)
return candy;

};*/


//en pkm se guardan los 14 pokemones ya filtrados
export const filterType = (Pokemon) => {
const type= Pokemon.filter( (pkm) => {
  for(let i=0;i<pkm.type.length;i++){
  if(pkm.type[i] === 'Grass'){
      return pkm;
    }
  }
});
console.log(type)
return type;
};








//document.getElementById("demo").innerHTML = allweaknesses;
//};

//};

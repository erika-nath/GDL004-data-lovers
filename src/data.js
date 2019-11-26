
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
const type = Pokemon.filter((pkm) => {
  //console.log(pkm.type)
  return pkm.type[0] === 'Grass' || pkm.type[1] === 'Grass'
  /*for(let i=0;i<pkm.type.length;i++){
  if(pkm.type[i] === 'Grass'){
    console.log(pkm.type[i])
    const pokemones_ordenados = pkm.sort((pok1,pok2) => {
      return (pok1.nombre < pok2.nombre );
      console.log(pokemones_ordenados)
    })
  }*/
//};
});
console.log(type)
return type;
};

export const ordenName = (Pokemon) => {
 const ordenNam = Pokemon.sort((pk1,pk2) => {
   if(pk1.name > pk2.name){
     return 1;
   }else if(pk1.name < pk2.name){
     return -1;
   }
   return 0
})
//console.log(ordenNam, 'order')
return ordenNam
 //console.log(ordenNam)
};



export  const filterWater = (Pokemon) => {
const type = Pokemon.filter((pkm) => {
    return pkm.type[0] === 'Water' || pkm.type[1] === 'Water'





//document.getElementById("demo").innerHTML = allweaknesses;
//};

//};
});
console.log(type)
return type;
};

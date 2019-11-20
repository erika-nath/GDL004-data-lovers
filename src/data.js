/* Manejo de data

// esta es una función de ejemplo

export const example = () => {
  return 'example';
};*/

export const filterCandy = (Pokemon) => {
const candy= Pokemon.filter( (pkm) => {
  for(let i=0;i<pkm.type.length;i++){
  if(pkm.type[i] === 'Grass'){
      return pkm;
    }
  }
});
console.log(candy)
return candy;

};



/*export const filterItems=(Pokemon)=>{
const filterItems= query => {
  return Pokemon.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1);
}
};//

//console.log(Pokemon('name')); //
console.log(filterItems('water')) //*/

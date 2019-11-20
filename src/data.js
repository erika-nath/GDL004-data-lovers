/* Manejo de data

// esta es una función de ejemplo

export const example = () => {
  return 'example';
};*/

/*export const filterWeaknesses=(Pokemon)=>{
const weaknesses=Pokemon.filter(name.weaknesses=water));
return weaknesses;

};*/
export const filterItems=(Pokemon)=>{
const filterItems= query => {
  return Pokemon.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1);
}
};//

//console.log(Pokemon('name')); //
console.log(filterItems('water')); //

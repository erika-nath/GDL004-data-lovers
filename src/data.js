
export  const filterType = (Pokemon) => {
const type = Pokemon.filter((pkm) => {
  //console.log(pkm.type)
  return pkm.type[0] === 'Grass' || pkm.type[1] === 'Grass'

});
console.log(type)
return type;
};

export  const filterWater = (Pokemon) => {
const type = Pokemon.filter((pkm) => {
    return pkm.type[0] === 'Water' || pkm.type[1] === 'Water'

});
console.log(type)
return type;
};

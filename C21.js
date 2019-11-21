const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  return recipes.find(({ ingredients }) => {
    return ingredients.every(i => bakeryA.includes(i) || bakeryB.includes(i));
  }).name;
};

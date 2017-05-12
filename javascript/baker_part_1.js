function cakes(recipe, ingredients) {
  ik = Object.keys(ingredients);
  n = []
  for (let k in recipe) {
    if (ik.includes(k)) {
      n.push(Math.floor(ingredients[k] / recipe[k]));
    } else {
      return 0
    }
  }
  return n.sort((a,b) => {return a-b})[0]
}

console.log("must return 2", cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
console.log("must return 0", cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
function getIngredientNames (product) {
  const items = []
  product.forEach(ingredient => {
    items.push(ingredient.name)
  })
  return items
}

export default {
  getIngredientNames
}

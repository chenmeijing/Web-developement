const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

const isTheDinnerVegan = array => {
 return array.every(el => el.source ===  'plant')
}
console.log(isTheDinnerVegan(dinner))
// Should print false
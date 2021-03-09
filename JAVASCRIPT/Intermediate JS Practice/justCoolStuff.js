// Write your code here:
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

const justCoolStuff = (arr1, arr2) => {
 return arr1.filter(el => arr2.includes(el))
}

console.log(justCoolStuff(myStuff, coolStuff));

// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

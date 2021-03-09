// Write your code here:
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

function findMyKeys(array){
 return array.findIndex(el => el === 'keys')
}
console.log(findMyKeys(randomStuff))
// Should print 4
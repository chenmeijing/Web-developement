// Write your code here:
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

function convertToBaby(array){
  let result = [];
  for(let i = 0; i < array.length; i++){
  
    result.push('baby '.concat(array[i]));
  }
  return result;
}

console.log(convertToBaby(animals)); 
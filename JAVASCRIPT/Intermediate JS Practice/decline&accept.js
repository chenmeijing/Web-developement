const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
function declineEverything(array){
  array.forEach(politelyDecline);
}

declineEverything(veggies);

function acceptEverything(array){
  array.forEach(el => console.log(`Ok, I guess I will eat some ${el}.`));

}
acceptEverything(veggies);
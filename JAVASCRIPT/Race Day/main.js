let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
const age = 18;
if(age > 18 && registeredEarly === true  ){
	raceNumber +=1000;
	console.log(`You will race at 9:30 am and your race number is ${raceNumber}.`);

}else if(age > 18 && registeredEarly === false ){
	console.log(`You will race at 11:00 am and your race number is ${raceNumber}.`);

}else if(age < 18){
	console.log(`You will race at 12:30 pm and your race number is ${raceNumber}.`);

}else if(age === 18 && registeredEarly === true){
  console.log(`You will see the desk! and `);
  
}else if(age === 18 && registeredEarly === false){
  console.log('You will not see the registeration desk!');
}

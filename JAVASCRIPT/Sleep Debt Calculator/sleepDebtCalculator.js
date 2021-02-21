const getSleepHours = day => {
	day = day.toLowerCase();

	if(day === 'monday'){
		return 8;
	}else if(day === 'tuesday'){
		return 7;
	}else if(day === 'wednesday'){
		return 6;
	}else if(day === 'thursday'){
		return 7;
	}else if (day === 'friday') {
		return 9;
	}else if (day === 'saturday') {
		return 7;
	}else if (day === 'sunday') {
		return 8;
	}
}

//In writing with switch
const getSleepHours = day => {
	day = day.toLowerCase();

	switch(day){
		case 'monday':
			return 8;
			break;
		case 'tuesday':
			return 7;
			break;
		case 'wednesday':
			return 6;
			break;
		case 'thursday':
			return 7;
			break;
		case 'friday':
			return 9;
			break;
		case 'saturday':
			return 7;
			break;
		case 'sunday':
			return 8;
			break;
		default:
			return 'Invalid day';
			break;
	}
}
// console.log(getSleepHours('tuesday'));

const getActualSleepHours = () => {
	return (getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'));
}

// console.log(getActualSleepHours());
const getIdealSleepHours = () => {
	let idealHours = 7;
	return idealHours * 7;
}
// console.log(getIdealSleepHours());

//Another way!
const getIdealSleepHours = idealHours => idealHours * 7; 
const calculateSleepDebt = () => {
  :
  :
  let idealSleepHours = getIdealSleepHours(8);
}



const calculateSleepDebt = () => {
	let actualSleepHours = getActualSleepHours();
	let idealSleepHours = getIdealSleepHours();

	if(actualSleepHours === idealSleepHours){

		console.log('The user got the perfect amount ot sleep!');
	}else if(actualSleepHours > idealSleepHours){

		console.log(`The user got ${actualSleepHours - idealSleepHours}hours more sleep than needed in this week!`);
	}else if(actualSleepHours < idealSleepHours){

		console.log(`The user got ${idealSleepHours - actualSleepHours} hours less than you needed this week. You should get some rest!`);
	}

}
calculateSleepDebt();

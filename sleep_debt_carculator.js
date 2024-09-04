//the number of hours you slept that night
const getSleepHours = day =>{
    switch(day){
    case 'monday':
     return 8;
     break
    case 'tuesday':
     return 7;
     break;
    case  'wednesday':
     return 6;
     break;
    case 'thursday':
     return 5;
     break;
    case 'friday':
     return 6;
     break;
    case 'saturday':
     return 7;
     break;
    case 'sunday':
     return 8;
     break;
    default:
     return "error!";
     break;
    }
  };
  
  //function to get the sleep hours for each night
  const getActualSleepHours = () => {
   return getSleepHours('monday') +
          getSleepHours('tuesday') +
          getSleepHours('wednesday') +
          getSleepHours('thursday') +
          getSleepHours('friday') +
          getSleepHours('saturday') +
          getSleepHours('sunday')
  };
  console.log(`You slept for ${getActualSleepHours()}hours in this week.`);
  
  //function to get the ideal sleep hours that you prefer
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7; 
  };
  console.log(`Your ideal sleep hours is ${getIdealSleepHours()} hours.`)
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours){
      console.log("You've got the perfect amount of sleep");
    }
    else if (actualSleepHours > idealSleepHours){
      console.log("You should get more sleep than needed");
    }
    else if (actualSleepHours < idealSleepHours){
      console.log("You should get some rest");
    }
    else{
      console.log("something went wrong,check your code");
    }
  };
  
  calculateSleepDebt();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
/*
Race number:
Early adults receive a race number at or above 1000.
All others receive a number below 1000.

Start time:
Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
*/
let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;

if (early && age > 18) {
  raceNumber += 1000;
}

if (early && age > 18) {
  console.log(`you will race at 9:30 am. your race number is ${raceNumber}`);
}else if (!early && age >18){
  console.log(`you will race at 11:00 am.your race number is ${raceNumber}`);
}else if (age < 18){
  console.log(`you will race at 12:30 am.your race number is ${raceNumber}`);
}else{
  console.log(`please check your information.`);
}

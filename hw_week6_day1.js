// Episode 1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);


// // The code will work because costants values won't cahnge; we can 
// // retrieve the information stored in the scenario constant and use it 
// // in the other functions.

  
// Episode 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// // The code won't work because the function changeMurder is trying 
// // to modify the constant which has already been assigned to murder. 
// // If we comment out the function changeMurder the code will work.


// Episode 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

//// The let murderer in the const declareMurderer will be available only inside the function
//// itself. In this case the first console.log will print the declareMurder because it is referreing 
//// to the let variable inside that block, 
//// in the second console.log the first let variable assigned, Professor Plum, will be printed.



// Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

//// The first console.log will work and will print Colonel 
//// Mustard because that is the value of the variable defined inside the declareAllSuspect function.
//// The second console.log will work and will print Mrs Peacock as the let variable assigned first is not 
//// modifiable.



// Episode 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

//// It will work as the value of the scenario.weapon property can be updated in the changeWeapon function. 
//// In the declareWeapon the first weapon, Candle stick, will be printed. The virdict will print 'Reavolver'
//// after the function changeWeapon has been called.



// Episode 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//// the first const function changeMurderer won't change the let murder;
//// in the plotTwist function the murderer will be changed from Mr Green to Mrs White;
//// in the declareMurder the murderer will still be the let murderer Colonel Mustard;
//// the final murderer in the verdict will depend on the changeMurderer function and Mrs White 
//// will be printed.



// Episode 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//// The unexpectedOutcome and the plotTwist will error as the let variable has already been assigned inside the same block.
//// The declareMurderer function will output Professor Plum. 
//// The changeMurderer will change the murderer into the first const defined inside the block and the
////  verdict will be the one defined inside the changeMurderer function


// Episode 8

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWe8apon();
// console.log(verdict);

//// The verdict will be the candle Stick, while in the first declareWeapon is the lead pipe.



// Episode 9

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//// Rhe verdict will be Professor Plum as the let variable 
//// won't be reassigned by the if block; it will just change locally.
const characters = [
  'A woman with a toddler',
  'A teenage boy with a crush',
  'A dog walker',
  'An owner of an infamous social media account',
  'An alligator wrestler',
  'Soloist in a ballerina troupe',
  'An old lady with a large bag'
];

const settings = [
  'Outside an abandoned warehouse',
  'Near a haunted schoolbus',
  'At a friend\'s parent\'s beach house',
  'In an old fast food restaurant',
  'Under the moon',
  'At an entrance to the sewer',
  'Outside the beauty salon'
];

const risingActions = [
  'Gets lost',
  'Overhears a secret',
  'Drinks alcohol for the first time',
  'Loses a bet',
  'Forgets an important date',
  'Finds an item that should not be there',
  'Sets up a prank'
];

const climaxes = [
  'And a secret is revealed',
  'And exposes a lie',
  'And crashes a car',
  'And gets caught stealing',
  'And hits a stranger',
  'And an impromptu performance occurs'
];

let allParagraphs = document.querySelectorAll('p');
// Global tracker for the string that currently appears
let currentCharacter;
let currentSetting;
let currentRisingAction;
let currentClimax;

// A function that accepts an argument (should be an array above) and returns a random item within that array as a string
function random(set) {
  let num = Math.floor(Math.random() * Math.floor(set.length));
  return set[num];
}

// Function to generate random item but without repeating current value
function randomNoRepeat(arraySet, currentValue) {
  let currentIndex = arraySet.indexOf(currentValue);
  let copySet = arraySet.slice();
  copySet.splice(currentIndex, 1);
  return random(copySet);
}

// Changes the global tracker values
function updateCurrentValue(set, newValue) {
 if (set == characters) {
   currentCharacter = newValue;
 };
 if (set == settings) {
   currentSetting = newValue;
 };
 if (set == risingActions) {
   currentRisingAction = newValue;
 };
 if (set == climaxes) {
   currentClimax = newValue;
 };
}

// Function that checks whether there's a current prompt
// And if there is, it calls randomNoRepeat to generate a unique one
// And if there isn't, it calls random() to generate a prompt
// Either way it updates the current value after generating a new one
function uniqueRandom(set, currentValue) {
  if (currentValue) {
    let randomPrompt = randomNoRepeat(set, currentValue);
    updateCurrentValue(set, randomPrompt);
    return randomPrompt;
  } else {
    let randomPrompt = random(set);
    updateCurrentValue(set, randomPrompt);
    return randomPrompt;
  };
}



// Clicking "Generate Prompt" button creates an array of function calls
// that generate a random character, setting, rising action, and climax
//  Then loops through each p in allParagraphs
//  Changing the textContent of each
$('.btn-generate').on('click', () => {
  let randomSet = [
    uniqueRandom(settings, currentSetting),
    uniqueRandom(characters, currentCharacter),
    uniqueRandom(risingActions, currentRisingAction),
    uniqueRandom(climaxes, currentClimax)
  ];
  for (let i = 0; i < allParagraphs.length; i += 1){
    let newPara = allParagraphs[i];
    newPara.textContent = randomSet[i];
  }
});


// Changes the character when Character div is clicked
$('.item-1').on('click', () => {
  let randomChar = uniqueRandom(characters, currentCharacter);
  $('.item-1 p').text(randomChar);
});

// Changes the setting when Setting div is clicked
$('.item-2').on('click', () => {
  let randomSet = uniqueRandom(settings, currentSetting);
  $('.item-2 p').text(randomSet);
});

// Changes the Rising Action when Rising Action div is clicked
$('.item-3').on('click', () => {
  let randomRis = uniqueRandom(risingActions, currentRisingAction);
  $('.item-3 p').text(randomRis);
});

// Changes the climax when Climax div is clicked
$('.item-4').on('click', () => {
  let randomCli = uniqueRandom(climaxes, currentClimax);
  $('.item-4 p').text(randomCli);
});


//TO DO
// - after clicking "generate prompt", each part becomes a sentence?

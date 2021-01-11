// Challenge 1: Your Age in Days
function ageInDays() {
  var birthYear = prompt("What year were you born... Good friend?");
  var ageInDays = (2018 - birthYear) * 365;
  var h1 = document.createElement('H1');
  var textAnswer = document.createTextNode('You are ' + ageInDays.toString() + ' days old.');
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
  document.getElementById('ageInDays').remove();
}

// Challenge 2: Cat Generator
function generateCat() {
  var catDiv = document.createElement('div');
  catDiv.innerHTML = "<img class='cat-image' src='http://thecatapi.com/api/images/get?format=src&type=gif&size=small'>"
  document.getElementById('catGeneratorDiv').appendChild(catDiv);
}


// Challenge 3: Rock, Paper, Scissors

function rpsGame(yourChoice) {
  var humanChoice, DEALERChoice;
  humanChoice = yourChoice.id;
  DEALERChoice = numberToChoice(randToRpsInt());
  results = decideWinner(humanChoice, DEALERChoice);
  message = finalMessage(results)
  rpsFrontEnd(yourChoice.id, DEALERChoice, message);
  // alert(message + '\n---------------------------\n\nYou: ' + humanChoice + '\nDEALER: ' + DEALERChoice + '\nYour Score: ' + humanScore + '\nDEALER Score: ' + DEALERScore);
}

/**
 * Returns either 0, 1 or 2
 */
function randToRpsInt() {
  return Math.floor(Math.random() * 3)
}

/**
 * Takes in a integer and returns the choice as a string.
 * @param {int} number - Numbers 0-2
 */
function numberToChoice(number) {
  return ['rock', 'paper', 'scissors'][number]
}

/**
 * Takes in your choice & computer's choice as strings and returns
 * the scores as an array.
 * @param {string} yourChoice 
 * @param {string} computerChoice 
 */
function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
    'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
    'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
  }

  var yourScore = rpsDatabase[yourChoice][computerChoice]
  var computerScore = rpsDatabase[computerChoice][yourChoice]

  return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]){
  if (yourScore === 0) {
    return {'message': 'You lost!', 'color': 'red'}
  } else if (yourScore == 0.5) {
    return {'message': 'You tied!', 'color': 'yellow'}
  } else {
    return {'message': 'You won!', 'color': 'green'}
  }
}

function rpsFrontEnd(humanImageChoice, DEALERImageChoice, finalMessage) {
  var items = ['rock', 'paper', 'scissors'];

  var imagesDatabase = {
    'rock': document.getElementById('rock').src, 
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  };

  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var humanDiv = document.createElement('div');
  var DEALERDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
  messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
  DEALERDiv.innerHTML = "<img src='" + imagesDatabase[DEALERImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  document.getElementById('flex-box-rps-div').appendChild(DEALERDiv);

  /* Alternate way of doing this
  // create image elements
  var image1 = document.createElement('img');
  var image2 = document.createElement('img');

  // set the attributes for the images
  image1.setAttribute = ('src', imagesDatabase[humanImageChoice]);
  image1.setAttribute = ('height', '150px');
  image2.setAttribute = ('src', imagesDatabase[DEALERImageChoice]);
  image2.setAttribute = ('width', '150px');

  // append the images to the flex-box-rps-div
  document.getElementById('flex-box-rps-div').appendChild(image1);
  document.getElementById('flex-box-rps-div').appendChild(image2);
  */
}

// Challenge 4: Change Button Colors
var all_buttons = document.getElementsByTagName('button');
var copyAllButtons = []

for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === 'red') {
    buttonsRed();
  } else if (buttonThingy.value === 'green') {
    buttonsGreen();
  } else if (buttonThingy.value === 'reset') {
    buttonColorReset();
  } else if (buttonThingy.value === 'random'){
    randomColors();
  }
}

function buttonsRed(){
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}

function buttonsGreen(){
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}

function buttonColorReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors() {
  var allButtons = document.getElementsByTagName('button');

  var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

  for (i = 0; i < allButtons.length; i++) {
    var randomNumber = Math.floor(Math.random() * 4);
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(choices[randomNumber]);
  }
}

// Challenge 5: Blackjack
let blackjackGame = {
  'you': {'scoreSpan': '#your-blackjack-score', 'div': '#your-box', 'score': 0},
  'dealer': {'scoreSpan': '#dealer-blackjack-score', 'div': '#dealer-box', 'score': 0},
  'isStand': false,
  'turnsOver': false,
  'wins': 0,
  'losses': 0,
  'draws': 0,
  'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'Q': 10, 'J': 10, 'A': [1, 11]},
  'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A']
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

// we are gonna use event listeners
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

function blackjackHit() {
  if (blackjackGame['isStand'] === false) {
    let card = randomCard();
    updateScore(card, YOU);
    showCard(card, YOU);
    showScore(YOU);
  }
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame['cards'][randomIndex];
}

function updateScore(card, activePlayer) {
  if (card === 'A') {
    if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
      activePlayer['score'] += blackjackGame['cardsMap'][card][1];
    } else {
      activePlayer['score'] += blackjackGame['cardsMap'][card][0];
    }
  } else {
    activePlayer['score'] += blackjackGame['cardsMap'][card];
  }
}

function showCard(card, activePlayer) {
  if (activePlayer['score'] <= 21) {
    let cardImage = document.createElement('IMG');
    cardImage.src = `static/images/${card}.png`
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
  }
}

function showScore(activePlayer) {
  if (activePlayer['score'] > 21) {
    document.querySelector(activePlayer['scoreSpan']).textContent = "BUST!";
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
  } else {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
  blackjackGame['isStand'] = true;
  while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
    let card = randomCard();
    updateScore(card, DEALER);
    showCard(card, DEALER);
    showScore(DEALER);
    await sleep(1000);
  }

  blackjackGame['turnsOver'] = true;
  showResult(); 
}

function blackjackDeal() {
  if (blackjackGame['turnsOver'] === true) {

    blackjackGame['isStand'] = false;

    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    for (i=0; i<yourImages.length; i++) {
      yourImages[i].remove();
    }

    for (i=0; i<dealerImages.length; i++) {
      dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-score').textContent = 0;
    document.querySelector('#dealer-blackjack-score').textContent = 0;

    document.querySelector('#your-blackjack-score').style.color = '#ffffff';
    document.querySelector('#dealer-blackjack-score').style.color = '#ffffff';

    document.querySelector('#blackjack-result').textContent = "Let's play";
    document.querySelector('#blackjack-result').style.color = 'black';

    blackjackGame['turnsOver'] = false;
  }
}

// show result on the top and update the score in the table
function showResult() {
  let message, messageColor;

  if (blackjackGame['turnsOver'] === true) {

    if (YOU['score'] <= 21) {

      // condition: higher score than dealer's or when dealer busts but you're 21 or under.
      if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
        blackjackGame['wins']++;
        document.querySelector('#wins').textContent =  blackjackGame['wins']; 
        message = 'You won!';
        messageColor = 'green';
        winSound.play();

      } else if (YOU['score'] < DEALER['score']) {
        blackjackGame['losses']++;
        document.querySelector('#losses').textContent =  blackjackGame['losses']; 
        message = 'You lost!';
        messageColor = 'red';
        lossSound.play();

      } else if (YOU['score'] === DEALER['score']) {
        blackjackGame['draws']++;
        document.querySelector('#draws').textContent = blackjackGame['draws']; 
        message = 'You drew!';
        messageColor = 'black';
      }

      // condition: user busts but dealer doesn't
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
      blackjackGame['losses']++;
      document.querySelector('#losses').textContent = blackjackGame['losses'];
      message = 'You lost!';
      messageColor = 'red';
      lossSound.play();

    // condition: when DEALERh bust.
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
      blackjackGame['draws']++;
      document.querySelector('#draws').textContent = blackjackGame['draws'];
      message = 'You drew!';
      messageColor = 'black';
    }
  }

  document.querySelector('#blackjack-result').textContent = message;
  document.querySelector('#blackjack-result').style.color = messageColor;
}

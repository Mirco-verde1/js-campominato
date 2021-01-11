


//Funzione con il quale genero numeri randomici

function randomNumber(min, max) {
 var result = Math.floor(Math.random() * (max + 1 - min) + min);
 return result;
}


 //Verifico se il valore inserito sia valido per il gioco, quindi numerico e nel range di numeri possibili
function inputValidNumber(inputnumber){
  if (isNaN(inputnumber)) {
    return false
  }
  if (inputnumber > 100 || inputnumber <= 0) {
    return false
  }

    return true;
}


//Funzione con il quale verifico che i numeri inseriti dall'utente siano prensenti o no nell'array di numeri randomici.
function verifyInputInNumberRandom(inputUser , generatednumber){
  if (generatednumber.includes(inputUser)) {
    return false;
  }
  else {
    return true;
  }
}


//funzione che userò per il punteggio.
function userPoint(array){
  alert(array.length)
  return alert;
}

//genero 16 numeri randomici
var numberRandomList = [];

while (numberRandomList.length < 16) {
  var numberGenerated = randomNumber(1, 100)
  if (numberRandomList.includes(numberGenerated) === false) {
    numberRandomList.push(numberGenerated)
  }
};


var attemptsAllowed = 84; //tentativi consentiti per la vincita (100 - 16).
//Basterà sostituire questo valore se dovesse cambiare la possibilità di tentativi

var inputNumberList = [];
var userInputNumber;


while (inputNumberList.length < attemptsAllowed && verifyInputInNumberRandom(userInputNumber , numberRandomList)) {

  userInputNumber =  (parseInt(prompt('Inserisci il tuo numero da 1 a 100')))
  if (inputValidNumber(userInputNumber)) {

    if (inputNumberList.includes(userInputNumber) === true) {
      alert('Questo numero è già stato inserito')
    }
    else {
    if (verifyInputInNumberRandom(userInputNumber , numberRandomList) === false) {
      alert('Hai perso,ritenta!')
    }
    inputNumberList.push(userInputNumber);

    }

  }if (inputNumberList.length === 84) {
    alert('Hai vinto!')
  }
}

userPoint(inputNumberList);

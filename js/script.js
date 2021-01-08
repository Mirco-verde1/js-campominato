// Con la funzione randomNumber genero i numeri da 1 a 100
//Con un ciclo for ne prendo 16
//Creo un array che verrà popolato dai 16 numeri random
//Controllo che i numeri non siano ripetuti


// FUNZIONE RANDOM
function randomNumber(min, max) {
 var result = Math.floor(Math.random() * (max + 1 - min) + min); //Funzione con il quale genero numeri randomici
 return result;
}

// FUNZIONE VERIFICA CHE NON CI SIA UN NUMERO DUPLICATO NELL'ARRAY POPOLATA DA NUMERI
function findDuplicateRandomNum(array){
  array.slice().sort();

  for (var i = 0; i < array.length; i++) {
    if(array[i] !== array[i]){
    return true
 }
    else {
    return false;
  }
}
};

//FUNZIONE PER VERIFICARE SE UN NUMERO è CONTENUTO IN UN ARRAY,QUINDI SE L'UTENTE POSSA VINCERE O PERDERE
function verifyElementInArray(array1 , array2){
  for (var y = 0; y < array1.length; i++) {
    array1[y];
  }
  for (var j = 0; j < array2.length; i++) {
    array2[j];
  }
  if ((array[y]) === (array2[j])) {
    return true;
  }
  else {
    return false;
  }
  };

//PRENDO 16 NUMERI RANDOM E CON ESSI POPOLO IL MIO ARRAY;
var numberTimeRandomContainer = [];
for (var i = 0; i < 16; i++) {
  var numberTimeRandom = randomNumber(1, 100);
  numberTimeRandomContainer.push(numberTimeRandom);
}


//CONTROLLO CHE NON CI SIANO DUPLICATI

 if (findDuplicateRandomNum(numberTimeRandomContainer)) {    //TO DO (DA RIVEDERE)
   alert('Puoi continuare')
 }else {
   alert('Riavvia il gioco,abbiamo un doppione!')
 }



// CHIEDO ALL'UTENTE DI INSERIRE UN NUMERO

var inputNumberContainer = [];

while
 (verifyElementInArray(numberTimeRandomContainer , inputNumberContainer)) {

   for (var i = 0; i < 5; i++) {
     var inputNumber = (parseInt(prompt('Inserisci il tuo numero!')))
     inputNumberContainer.push(inputNumber);

}if (true) {
  alert('hai vinto')
}else {
  alert('tenta ancora')
}


}

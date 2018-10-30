/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
/*const myTimer () {
  const 
}
*/
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert("Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.");
  var playAgain = true;
  while (playAgain){
    play();
    playAgain = confirm("Spila aftur?");
  }
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra sleta. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú sletaðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {

  let timeA = Date.now();
  let correct = 0;
  for (let games = 0; games < GAMES_TO_PLAY; games++) {
    var answer = ask();
    if (answer === null) {
      alert("Hætt í leik!");
      break;
    }
    if(answer) {
      correct++;
    }
  }

  var timeB = Date.now();
  var timeD = (timeB-timeA)/1000;

  alert("Þú svaraðir " + correct + " af 10 dæmum rétt á " + timeD.toFixed(2) + " sekúndum.\n Meðalrétt svör á sekúndu eru " + (correct/timeD).toFixed(2));
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um slet (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * sleta í og túlkar sletið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. sletið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  
  //debugger;
  const question = makeQuestion(['+', '-', '*', '/']);

  const answer = prompt(question[1]);
  if(answer === null) {
    return null;
  }
  return question[0] == answer;
}

function makeQuestion(mod) {

  switch(mod[Math.floor(Math.random()*4)]){
    case '+':
      var random1 = randomNumber(1,100);
      var random2 = randomNumber(1,100);
      var answer = random1 + random2;
      var question = random1 + "+" + random2;
      break;
      
    case '-':
      var random1 = randomNumber(1,100);
      var random2 = randomNumber(1,100);
      var answer = random1 - random2;
      var question = random1 + "-" + random2;
      break;      

    case '*':
      var random1 = randomNumber(1,10);
      var random2 = randomNumber(1,10);
      var answer = random1 * random2;
      var question = random1 + "*" + random2;
      break;

    case '/':
      var random1 = randomNumber(2,10);
      var random2 = random1 * randomNumber(2,10);
      var answer = random1 / random2;
      var question = random1 + "/" + random2;
      break;
  }

  return [answer, question];
}


/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Byrjar leik
start();
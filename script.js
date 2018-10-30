/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
/*const myTimer () {
  let 
}
*/
const GAMES_TO_PLAY = 3;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert('Þegar smellt er á ok hnappann byrjar leikur þar sem markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.');

  if (GAMES_TO_PLAY < 3) {
    play();
  } else {
      break;
    }
    do {
      play();
    } while (confirm('Viltu spila annan leik?'))

  //villa;
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  const random = randomNumber(100);
  console.log(random); //sjá hver talan er í inspect

  let correct = false;
  let attemptsX = 0;

  do {
    const input = prompt('Giskaðu á tölu á milli 0-100');

    if (input === null) {
        break;
    }
    const parsedInput = parseGuess(input);
    correct = parsedInput === random;

    alert(getResponse(parsedInput, random));
    attempts++;
  } while (!correct);
  
  GAMES.push(attempts);
  alert(`Rétt í ${attempts} ágiskunum`);

  return true;
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
function randomNumber(1, 100) {
  return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

function randomNumberTwo(1, 10) {
  return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}

function randomNumberThree(2, 10) {
  return Math.floor(Math.random() * (10 - 2 + 1)) + 2;
}*/


// Byrjar leik
start();
/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 2;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.');

  do {
    play();
  } while (confirm('Spila annan leik?'));
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
  let correct = 0;
  const start = new Date();

  for (let i = 0; i < GAMES_TO_PLAY; i++) {
    const result = ask();

    if (result === null) {
      alert('Hætt í leik.');
      return;
    }

    if (result) {
      correct++;
    }
  }

  const end = new Date();
  const elapsed = end - start;

  const secs = elapsed / 1000;
  const average = correct / secs;

  const result = `Þú svaraðir ${correct} af ${GAMES_TO_PLAY} dæmum rétt á ${secs.toFixed(2)} sekúndum
Meðalrétt svör á sekúndu eru ${average.toFixed(2)}`;

  alert(result);
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
  const question = createProblem();

  const answer = prompt(`Hvað er ${question.problem}?`);

  if (answer === null) {
    return null;
  }

  const answerParsed = parseInt(answer, 10);

  return question.answer === answerParsed;
}

/**
 * Útbýr spurningu fyrir ask() og skilar sem hlut:
 * { problem: strengur með spurningu, answer: svar við spurningu sem tala }
 */
function createProblem() {
  const operators = ['+', '-', '*', '/'];

  const operator = operators[randomNumber(0, operators.length - 1)];

  let a = null;
  let b = null;
  let answer = null;

  switch (operator) {
    case '+':
      a = randomNumber(10, 100);
      b = randomNumber(10, 100);
      answer = a + b;
      break;
    case '-':
      a = randomNumber(10, 100);
      b = randomNumber(10, a);
      answer = a - b;
      break;
    case '*':
      a = randomNumber(1, 10);
      b = randomNumber(1, 10);
      answer = a * b;
      break;
    case '/':
      b = randomNumber(2, 10);
      a = randomNumber(2, 10) * b;
      answer = a / b;
      break;
    default:
      break;
  }

  return {
    problem: `${a} ${operator} ${b}`,
    answer,
  }
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
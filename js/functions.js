const readLineSync = require("readline-sync");

function readName() {
  console.log(`---- Quiz ----`);
  return readLineSync.question("name: ");
}

function displayArrayElements(array) {
  for (let i = 0; i < array.length; i++)
    console.log(`\t\t${i + 1}. ${array[i]}`);
}

function displayQuestion(array, name) {
  let score = 0;

  for (let i = 0; i < array.length; i++) {
    let obj = array[i];
    let answer = obj.answer;

    console.log(`\n${obj.id}. ${obj.question}\n\n\toptions:`);
    displayArrayElements(obj.options);
    console.log("\n");

    const userAnswer = readLineSync.question(`\t\tanswer: `);

    if (parseInt(userAnswer) === answer) score++;
  }
  console.log(`\n\nYour Final Score: ${score}.\nCongratulations "${name}"\n\n`);
}

module.exports = { readName, displayArrayElements, displayQuestion };

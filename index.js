const { questions, rules } = require("./questions");
const {
  readName,
  displayArrayElements,
  displayQuestion,
} = require("./functions");

const userName = readName();

console.log(`\n\tRules:`);
displayArrayElements(rules);

displayQuestion(questions, userName);

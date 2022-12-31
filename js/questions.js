const questions = [
  {
    id: 1,
    question: "Which function is used to output something in Javascript?",
    options: [
      "console.log()",
      "console.print()",
      "console.show()",
      "console.display()",
    ],
    answer: 1,
  },

  {
    id: 2,
    question:
      "Which package is used in NeoG Camp tutorial to read data entered by the user?",
    options: ["scanline-data", "scan-data", "readline-sync", "readline-data"],
    answer: 3,
  },
];

const rules = [
  "Dont use external resources to get answers",
  "Pick option and enter the option number",
  "You will be awarded a point for each correct answer",
  "At the end, the score will be displayed",
];

module.exports = { questions, rules };

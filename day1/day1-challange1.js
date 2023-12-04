const fs = require("fs");

const inputFilePath = "./input.txt";

const data = fs.readFileSync(inputFilePath, "utf8");
const lines = data.split("\n");

const results = lines.map((line) => {
  const getNumbers = line.match(/\d/g);

  const firstNumber = getNumbers[0];
  const lastNumber = getNumbers[getNumbers.length - 1];

  const concatenateNumbers = firstNumber + lastNumber;

  return concatenateNumbers;
});

const outputContent = results.join("\n");
const outputLines = outputContent.split("\n");

let sum = 0;
for (const line of outputLines) {
  sum += parseInt(line);
}

console.log("Sum of all lines:", sum);

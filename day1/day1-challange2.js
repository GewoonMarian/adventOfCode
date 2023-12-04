const fs = require("fs");

const filePath = "./input.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  const mapNumbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let total = 0;

  function findNumbers(line, position) {
    let char = position === "start" ? 0 : line.length - 1;

    while (char >= 0 && char < line.length) {
      for (const key of Object.keys(mapNumbers)) {
        const subString =
          position === "start"
            ? line.substring(char)
            : line.substring(0, char + 1);

        console.log("Current subString:", subString);

        if (
          (position === "start" && subString.startsWith(key)) ||
          (position === "end" && subString.endsWith(key))
        ) {
          console.log("Found matching key:", key);
          console.log("Returning:", mapNumbers[key]);
          return mapNumbers[key];
        }
      }

      const element = Number(line[char]);
      if (!isNaN(element) && element >= 0) {
        console.log("Returning number:", element);
        return element;
      }

      if (position === "start") {
        char += 1;
      } else {
        char -= 1;
      }
    }

    return null;
  }

  data.split(/\r?\n/).forEach((line) => {
    console.log("Processing line:", line);

    const firstDigit = findNumbers(line, "start");
    const secondDigit = findNumbers(line, "end");

    if (firstDigit !== null && secondDigit !== null) {
      const key = Number(String(firstDigit) + String(secondDigit));
      console.log("Each line output:", key);
      total += key;
    }
  });

  console.log("Total Counter:", total);
});

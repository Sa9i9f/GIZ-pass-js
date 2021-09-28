const { readFileSync } = require("fs");
fs = require("fs");
let numbers = [5, 8, 0, 1, 9, 11, 15, 16];
let nNumbers = numbers;
let numbersFromFile = readFileSync("data.txt", "utf8");

// method to sort array of Int. using bubble sort alg. in Asc and Desc
const bubbleSort = (array, ascending = true) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (ascending ? array[j] > array[j + 1] : array[j] < array[j + 1]) {
        // j not i
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Short method of the swaping
      }
    }
  }
  return array;
};

// print ascending sort , descending sort   and wrte sort number   to output file
console.log("Original numbers list: ", numbers);
console.log("numbers list After sorting: ", bubbleSort(nNumbers));
console.log(
  "numbers list After Desc sorting:",
  bubbleSort(nNumbers, (ascending = false))
);

fs.writeFileSync(
  "output.txt",
  bubbleSort(numbersFromFile.split(",")).join(",")
);

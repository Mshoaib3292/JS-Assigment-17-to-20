(function () {
  const printLine = (message) => {
    if (typeof document !== "undefined") {
      document.write(message + "<br>");
    } else {
      console.log(message);
    }
  };

  // Task 1: Empty multidimensional array
  const emptyMatrix = [[]];
  printLine("Task 1: Empty multidimensional array -> " + JSON.stringify(emptyMatrix));

  // Task 2: Matrix
  const matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];

  printLine("Task 2: Matrix rows:");
  for (let i = 0; i < matrix.length; i++) {
    printLine("Row " + (i + 1) + ": " + matrix[i].join(", "));
  }

  // Task 3: Counting 1 to 10
  printLine("Task 3: Counting from 1 to 10");
  for (let i = 1; i <= 10; i++) {
    printLine(i);
  }

  // Task 4: Multiplication table
  const tableNumber = 5;
  const tableLength = 10;
  printLine("Task 4: Multiplication table of " + tableNumber);
  for (let i = 1; i <= tableLength; i++) {
    printLine(tableNumber + " * " + i + " = " + (tableNumber * i));
  }

  // Task 5: Fruit array loop
  const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
  printLine("Task 5: Fruits array");
  for (let i = 0; i < fruits.length; i++) {
    printLine("Element at index " + i + ": " + fruits[i]);
  }

  // Task 6: Number series
  printLine("Task 6: Series");
  printLine("Counting: " + Array.from({ length: 15 }, (_, index) => index + 1).join(", "));
  printLine("Reverse counting: " + Array.from({ length: 10 }, (_, index) => 10 - index).join(", "));
  printLine("Even: " + Array.from({ length: 11 }, (_, index) => index * 2).join(", "));
  printLine("Odd: " + Array.from({ length: 10 }, (_, index) => index * 2 + 1).join(", "));
  printLine("Series: " + Array.from({ length: 10 }, (_, index) => (index + 1) * 2 + "k").join(", "));

  // Task 7: Search bakery item
  const bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
  const userInput = typeof prompt === "function"
    ? prompt("Welcome to ABC Bakery. What do you want to order?")
    : "cookie";

  let foundItem = false;
  printLine("Task 7: Bakery search");

  for (let i = 0; i < bakeryItems.length; i++) {
    if ((userInput || "").toLowerCase() === bakeryItems[i].toLowerCase()) {
      foundItem = true;
      printLine(userInput + " is available at index " + i + " in our bakery.");
      break;
    }
  }

  if (!foundItem) {
    printLine("We are sorry. " + (userInput || "Item") + " is not available in our bakery.");
  }

  // Task 8: Largest number
  const numbersForLargest = [24, 53, 78, 91, 12];
  let largest = numbersForLargest[0];

  for (let i = 1; i < numbersForLargest.length; i++) {
    if (numbersForLargest[i] > largest) {
      largest = numbersForLargest[i];
    }
  }

  printLine("Task 8: Largest number");
  printLine("Array items: " + numbersForLargest.join(", "));
  printLine("The largest number is: " + largest);

  // Task 9: Smallest number
  const numbersForSmallest = [24, 53, 78, 91, 12];
  let smallest = numbersForSmallest[0];

  for (let i = 1; i < numbersForSmallest.length; i++) {
    if (numbersForSmallest[i] < smallest) {
      smallest = numbersForSmallest[i];
    }
  }

  printLine("Task 9: Smallest number");
  printLine("Array items: " + numbersForSmallest.join(", "));
  printLine("The smallest number is: " + smallest);

  // Task 10: Multiples of 5 from 1 to 100
  printLine("Task 10: Multiples of 5 from 1 to 100");
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      printLine(i);
    }
  }
})();
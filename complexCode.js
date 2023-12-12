/*******************************************************
 * Filename: complexCode.js
 * Description: Complex code showcasing multiple concepts in JavaScript
 * Author: [Your Name]
 * Date: [Current Date]
 *******************************************************/

// Constants
const PI = 3.14159;
const CIRCLE_RADIUS = 5;

// Object Definition
class Shape {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  printDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Color: ${this.color}`);
  }
}

// Function Definition
function calculateCircleArea(radius) {
  return PI * radius ** 2;
}

// Array Manipulation
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);

// Event Handling
const button = document.createElement("button");
button.textContent = "Click Me";
button.addEventListener("click", () => {
  alert("Button Clicked!");
});

// Promises and Error Handling
function fetchUserData() {
  return new Promise((resolve, reject) => {
    // Simulating API call
    setTimeout(() => {
      const success = Math.random() >= 0.5;
      if (success) {
        const userData = { name: "John Doe", age: 25 };
        resolve(userData);
      } else {
        reject(new Error("Failed to fetch user data."));
      }
    }, 2000);
  });
}

fetchUserData()
  .then((userData) => {
    console.log("User Data:", userData);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

// Async/Await
async function performAsyncTask() {
  try {
    const result1 = await fetchUserData();
    console.log("Result 1:", result1);
    const result2 = await someOtherAsyncFunction();
    console.log("Result 2:", result2);
  } catch (error) {
    console.error("Async Error:", error.message);
  }
}

// DOM Manipulation
const heading = document.createElement("h1");
heading.textContent = "Complex JavaScript Code";
document.body.appendChild(heading);

// Data Visualization
const data = [10, 20, 30, 40, 50];
const svgContainer = d3.select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 200);

svgContainer.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 60)
  .attr("y", 0)
  .attr("width", 50)
  .attr("height", (d) => d)
  .attr("fill", "blue");

// Complex Algorithm
function fibonacci(n) {
  const fibSequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    const nextFib = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(nextFib);
  }
  return fibSequence;
}

const fibResult = fibonacci(10);
console.log("Fibonacci Sequence:", fibResult);

// Exporting Modules
module.exports = {
  PI,
  CIRCLE_RADIUS,
  Shape,
  calculateCircleArea,
  numbers,
  evenNumbers,
  button,
  fetchUserData,
  performAsyncTask,
  heading,
  data,
  svgContainer,
  fibonacci,
};

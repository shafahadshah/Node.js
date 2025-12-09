// script.js
console.log("script.js is running...");

let counter = 0;

function increment() {
  counter++;
  console.log("Counter in module:", counter);
}

module.exports = {
  increment,
  counterValue: () => counter
};

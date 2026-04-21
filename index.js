// index.js

function greet(name = "world") {
  return `Hello, ${name}! 👋`;
}

function sum(a, b) {
  return a + b;
}

module.exports = {
  greet,
  sum,
};
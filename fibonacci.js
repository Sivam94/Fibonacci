const prompt = require("prompt-sync")({ sigint: true });

function fibonacci(position, memo = {}) {
  if (position in memo) {
    return memo[position];
  }
  if (position < 2) {
    return position;
  }
  memo[position] =
    fibonacci(position - 1, memo) + fibonacci(position - 2, memo);
  return memo[position];
}

console.log("Press ctrl + c to exit the program");

while (true) {
  const position = prompt(
    "Enter an integer "
  );
  console.log(
    `fibonacci value at the given position - ${position} is ${fibonacci(
      position
    )}\n\n`
  );
}

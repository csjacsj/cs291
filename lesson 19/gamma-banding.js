const calc = (input) => {
  return Math.round(Math.pow((input / 255), 1 / 2.2) * 255);
};

let prevOutput = undefined;
let count = 0;
for (let i = 0; i <= 255; ++i) {
  const output = calc(i);
  if (output !== prevOutput) {
    ++count;
    prevOutput = output;
  }
}

console.log(`count: ${count}`);

// console.log(calc(0))
// console.log(calc(1))
// console.log(calc(2))

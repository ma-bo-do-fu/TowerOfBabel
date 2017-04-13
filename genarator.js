const max = process.argv[2];
let FizzBuzz = function* () {
  let value = 1, tmp = 1;
  while (value < max) {
    value = tmp;
    if (tmp % 15 === 0) {
      value = 'FizzBuzz';
    } else if (tmp % 5 === 0) {
      value = 'Buzz';
    } else if (tmp % 3 === 0) {
      value = 'Fizz';
    }
    tmp++;
    yield value;
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
}
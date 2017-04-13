let fibonacci = function* () {
  let currentValue = 0, nextValue = 1;
  while (currentValue < 1000) {
    // ここでdestructuringで値をswapさせる。
    [currentValue, nextValue] = [nextValue, currentValue + nextValue];
    // yieldで値を返す
    yield currentValue;
  }
}();

for (var n of fibonacci) {
  console.log(n);
}
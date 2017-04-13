const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    // ここに FizzBuzzの計算を書く
    // ヒント：
    // 計算を継続させたい時、つまり終了条件である繰り返し回数が max を超えていない時は
    // done: false のオブジェクトを返却する。
    // 逆に終了条件をみたすときには done: true のオブジェクトを返却する。
    let tmp = 1, value = 1;
    return {
      next() {
        if (tmp > max) return { done: true };
        value = tmp;
        if (tmp % 15 === 0) {
          value = 'FizzBuzz';
        } else if (tmp % 5 === 0) {
          value = 'Buzz';
        } else if (tmp % 3 === 0) {
          value = 'Fizz';
        }
        tmp++;
        return { done: false, value: value };
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}

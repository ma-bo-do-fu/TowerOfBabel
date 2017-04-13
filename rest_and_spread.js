var args = process.argv[2].split(",");
args = args.map((arg) => +arg);

// ここに平均を取るavg関数を作る、作る際には
// RESTパラメータを利用すること。
const avg = (...value) => {
  return value.reduce((x, y) => x + y) / value.length;
};

//const avg = (...value) => value.reduce((x, y) => x + y) / value.length;

console.log(avg(...args));
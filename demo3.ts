// 函数返回值
function returnNumber(a: number, b: number): number {
  return a + b;
}
const total = returnNumber(1, 2);
console.log(typeof total);

// 没有返回值
function justLog(): void {
  console.log("test");
}

// 执行不完nerver
function endless(): never {
  while (true) {}
  console.log("while");
  throw new Error();
  console.log("error");
}

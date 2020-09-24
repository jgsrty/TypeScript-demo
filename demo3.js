"use strict";
// 函数返回值
function returnNumber(a, b) {
    return a + b;
}
var total = returnNumber(1, 2);
console.log(typeof total);
// 没有返回值
function justLog() {
    console.log("test");
}
// 执行不完nerver
function endless() {
    while (true) { }
    console.log("while");
    throw new Error();
    console.log("error");
}

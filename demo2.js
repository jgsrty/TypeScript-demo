"use strict";
// 基础静态类型
var count = 1;
var uname = "1";
// 对象类型
// 1.对象 类型
var bruno = {
    name: "rty",
    age: 28,
};
// 2.数组 类型
var classmates = ["bruno", "bob"];
// 3.类 类型
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var bob = new Person();
// 4.函数 类型
var funBruno = function () { return "hello"; };

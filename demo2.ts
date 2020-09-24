// 基础静态类型
let count: number = 1;
let uname: string = "1";

// 对象类型
// 1.对象 类型
const bruno: {
  name: string;
  age: number;
} = {
  name: "rty",
  age: 28,
};
// 2.数组 类型
const classmates: string[] = ["bruno", "bob"];
// 3.类 类型
class Person {}
const bob: Person = new Person();
// 4.函数 类型
const funBruno: () => string = () => "hello";

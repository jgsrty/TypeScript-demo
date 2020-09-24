// 类的继承
class Lady {
  content = "hi, handsome";
  sayHello() {
    return this.content;
  }
}

class Gaga extends Lady {
  sayHello() {
    return super.sayHello() + ", good morning~";
  }
  sayBye() {
    return "good bye";
  }
}

const tiddy = new Gaga();
console.log(tiddy.sayHello());
console.log(tiddy.sayBye());

const tiddy2 = new Lady();
console.log(tiddy2.sayHello());
console.log("---------");

// 类的内部和类的外部
class Person6 {
  // protected name:number;
  // private name:number;
  name: string | undefined;
  public say() {
    console.log(this.name);
  }
}

const person = new Person6();
person.name = "rty";
console.log(person);
console.log(person.name);
person.say();
console.log("---------");

// 类的构造函数
class Person66 {
  // public name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }

  // 简化写法
  constructor(public name: string) {}
}

// 继承构造函数
// 子类只要写构造函数constructor
// 就要调用父类的super
// 即使父类没有构造函数(默认构造函数为空construcor(){})
class Teacher66 extends Person66 {
  constructor(public age: number) {
    super("bruno2");
  }
}

const person66 = new Person66("bruno");
console.log(person66.name);
const teacher66 = new Teacher66(28);
console.log(teacher66.name);
console.log(teacher66.age);
console.log("---------");

// 类的getter和setter
class Company {
  constructor(private _income: number) {}
  get income() {
    return this._income * 10;
  }
  set income(num: number) {
    this._income = this._income + (num + 1);
  }
}
const xiaozhu = new Company(9999);
console.log(xiaozhu.income);
xiaozhu.income = 8;
console.log(xiaozhu.income);
console.log("---------");

// 类的静态属性-不用实例化
class Company6 {
  static sayHire() {
    return "You're hired";
  }
}
console.log(Company6.sayHire());
console.log("---------");

// 抽象类
abstract class Staff66 {
  abstract skill(): any;
}
class frontEnd extends Staff66 {
  skill() {
    console.log("front end");
  }
}
class backEnd extends Staff66 {
  skill() {
    console.log("back end");
  }
}
class design extends Staff66 {
  skill() {
    console.log("designer");
  }
}

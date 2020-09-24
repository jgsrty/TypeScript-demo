"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类的继承
var Lady = /** @class */ (function () {
    function Lady() {
        this.content = "hi, handsome";
    }
    Lady.prototype.sayHello = function () {
        return this.content;
    };
    return Lady;
}());
var Gaga = /** @class */ (function (_super) {
    __extends(Gaga, _super);
    function Gaga() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gaga.prototype.sayHello = function () {
        return _super.prototype.sayHello.call(this) + ", good morning~";
    };
    Gaga.prototype.sayBye = function () {
        return "good bye";
    };
    return Gaga;
}(Lady));
var tiddy = new Gaga();
console.log(tiddy.sayHello());
console.log(tiddy.sayBye());
var tiddy2 = new Lady();
console.log(tiddy2.sayHello());
console.log("---------");
// 类的内部和类的外部
var Person6 = /** @class */ (function () {
    function Person6() {
    }
    Person6.prototype.say = function () {
        console.log(this.name);
    };
    return Person6;
}());
var person = new Person6();
person.name = "rty";
console.log(person);
console.log(person.name);
person.say();
console.log("---------");
// 类的构造函数
var Person66 = /** @class */ (function () {
    // public name: string;
    // constructor(name: string) {
    //   this.name = name;
    // }
    // 简化写法
    function Person66(name) {
        this.name = name;
    }
    return Person66;
}());
// 继承构造函数
// 子类只要写构造函数constructor
// 就要调用父类的super
// 即使父类没有构造函数(默认构造函数为空construcor(){})
var Teacher66 = /** @class */ (function (_super) {
    __extends(Teacher66, _super);
    function Teacher66(age) {
        var _this = _super.call(this, "bruno2") || this;
        _this.age = age;
        return _this;
    }
    return Teacher66;
}(Person66));
var person66 = new Person66("bruno");
console.log(person66.name);
var teacher66 = new Teacher66(28);
console.log(teacher66.name);
console.log(teacher66.age);
console.log("---------");
// 类的getter和setter
var Company = /** @class */ (function () {
    function Company(_income) {
        this._income = _income;
    }
    Object.defineProperty(Company.prototype, "income", {
        get: function () {
            return this._income * 10;
        },
        set: function (num) {
            this._income = this._income + (num + 1);
        },
        enumerable: false,
        configurable: true
    });
    return Company;
}());
var xiaozhu = new Company(9999);
console.log(xiaozhu.income);
xiaozhu.income = 8;
console.log(xiaozhu.income);
console.log("---------");
// 类的静态属性-不用实例化
var Company6 = /** @class */ (function () {
    function Company6() {
    }
    Company6.sayHire = function () {
        return "You're hired";
    };
    return Company6;
}());
console.log(Company6.sayHire());
console.log("---------");
// 抽象类
var Staff66 = /** @class */ (function () {
    function Staff66() {
    }
    return Staff66;
}());
var frontEnd = /** @class */ (function (_super) {
    __extends(frontEnd, _super);
    function frontEnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    frontEnd.prototype.skill = function () {
        console.log("front end");
    };
    return frontEnd;
}(Staff66));
var backEnd = /** @class */ (function (_super) {
    __extends(backEnd, _super);
    function backEnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    backEnd.prototype.skill = function () {
        console.log("back end");
    };
    return backEnd;
}(Staff66));
var design = /** @class */ (function (_super) {
    __extends(design, _super);
    function design() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    design.prototype.skill = function () {
        console.log("designer");
    };
    return design;
}(Staff66));

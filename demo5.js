"use strict";
// 接口 interface
var person1 = {
    skill: "vue",
    age: 28,
    title: "ceo",
    say: function () {
        return "haha";
    },
    retire: function () {
        return "bye";
    },
};
var filterResume = function (person) {
    console.log(person.skill + person.age + person.salary);
    person.title && console.log(person.title);
};
filterResume(person1);
// 接口和类的约束
var newStaff = /** @class */ (function () {
    function newStaff() {
        this.skill = "angluar";
        this.age = 30;
    }
    newStaff.prototype.say = function () {
        return "hehe";
    };
    return newStaff;
}());
var filterResume2 = function (person) {
    console.log(person.skill + person.age + person.salary);
    console.log(person.retire());
};
filterResume2(person1);

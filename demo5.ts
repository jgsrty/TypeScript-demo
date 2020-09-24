// 接口 interface

interface Staff {
  skill: string;
  age: number;
  salary?: string; //可选值
  [propname: string]: any; //任意值
  say(): string;
}

const person1 = {
  skill: "vue",
  age: 28,
  title: "ceo",
  say() {
    return "haha";
  },
  retire() {
    return "bye";
  },
};

const filterResume = (person: Staff) => {
  console.log(person.skill + person.age + person.salary);
  person.title && console.log(person.title);
};

filterResume(person1);

// 接口和类的约束
class newStaff implements Staff {
  skill: "angluar" = "angluar";
  age: 30 = 30;
  say() {
    return "hehe";
  }
}

// 接口继承
interface oldStaff extends Staff {
  retire(): string;
}

const filterResume2 = (person: oldStaff) => {
  console.log(person.skill + person.age + person.salary);
  console.log(person.retire());
};

filterResume2(person1);

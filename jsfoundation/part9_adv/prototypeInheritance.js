function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let akshay = new Person("akshay");
akshay.greet();

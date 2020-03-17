const validator = require("validator");
const greeter = require("./greeter");

greeter("Hello friends!");

const validateEmail = email => {
  return validator.isEmail(email);
};

console.log(
  "Is mango@mail.com a valid email?: ",
  validateEmail("mango@mail.com")
);

console.log(
  "Is Mangozedog.com a valid email?: ",
  validateEmail("Mangozedog.com")
);

class User {
  static hello = "aloha";

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const mango = new User("Mango");

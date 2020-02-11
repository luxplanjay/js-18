// js-add-method

const Manager = function(name, sales) {
  this.name = name;
  this.sales = sales;
};

Manager.prototype.sell = function() {
  this.sales += 1;
};

Manager.prototype.changeName = function(name) {
  this.name = name;
};

const mango = new Manager('Mango', 5);
console.log(mango);

document.querySelector('.js-add-method').addEventListener('click', function() {
  Manager.prototype.newMethod = function() {
    console.log(this);
    console.log('HELLO!');
  };

  console.log(Manager.prototype);
  mango.newMethod();
});

console.log(Manager.prototype);

/*
 * Делаем систему классов с наследованием
 */

class Hero {
  constructor(name, xp) {
    this._name = name;
    this.xp = xp;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  gainXp(amount) {
    console.log(`${this.name} получил ${amount} опыта`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor(name, xp, weapon) {
    super(name, xp);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}

// const mango = new Warrior('Mango', 1000, 'Алибарда');
// console.log(mango);
// mango.attack();
// mango.gainXp(2000);

class Paladin extends Warrior {
  constructor(name, xp, weapon, spell) {
    super(name, xp, weapon);

    this.spell = spell;
  }

  cast() {
    console.log(`${this.name} кастует ${this.spell}`);
  }
}

const mango = new Paladin('Mango', 1000, 'Алибарда', 'Cleanse');
console.log(mango);
mango.attack();
mango.gainXp(2000);
console.log(mango.name);
mango.cast();

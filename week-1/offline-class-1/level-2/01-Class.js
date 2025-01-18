class Animal {
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }
}

let dog = new Animal("GanDog", 2);
let cat = new Animal("Chacat", 10);

console.log(dog.describe());
console.log(cat.describe());

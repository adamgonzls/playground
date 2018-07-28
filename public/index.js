const person = {
  name: "Adam",
  weight: "180",
  age: 30
};
for (const property in person) {
  console.log("This person's " + property + " is " + person[property] + ".");
}

function intro(greeting, name) {
  console.log(greeting + ", my name is " + name);
}

intro("hi", "Tom");

function getArea(radius) {
  return radius * radius * Math.PI;
}

const dog = {
  name: "Cooper",
  age: 3,
  bark: function() {
    console.log("BORK BORK");
  }
}

dog.age = 4;
dog.weight = 20;
console.log(dog);

console.log(dog.hasOwnProperty("name"));
console.log(dog.hasOwnProperty("weight"));

console.log(Object.keys(dog));
console.log(Object.values(dog));

var entries = Object.entries(dog);
console.log(entries);
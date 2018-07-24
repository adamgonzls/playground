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

let radius = 3;
let area = getArea(radius);
console.log("A circle with a radius of " + radius + " has an area of " + area + ".");

//arrays 
const drinks = ["water", "sparkling water", "juice", "soda"];
console.log(drinks[1]);
drinks[2] = "coffee";

for (let i = 0; i < drinks.length; i++) {
  console.log(drinks[i]);
}

let sortedDrinks = drinks.sort();

drinks.push("tea");
drinks.pop();

console.log(sortedDrinks);

drinks.splice(2, 3);
console.log(drinks);
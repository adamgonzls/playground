class Pet {
  constructor(name, weight, adoptionFee) {
    this.name = name;
    this.weight = weight;
    this.adoptionFee = adoptionFee;
  }
  getInfo() {
    return "Hi, my name is " + this.name + ". I weigh " + this.weight + " pounds and my adoption fee is $" + this.adoptionFee + ".";
  }
}

// let pet1 = new Pet("Fluffy", 20, 45);
// let pet2 = new Pet("Oreo", 15, 200);
// let pet3 = new Pet("Claw", 12, 75);

// console.log(pet1.getInfo());
// console.log(pet2.getInfo());

// class Dog extends Pet {
//   bark() {
//     console.log("BARK BARK BARK");
//   }
// }

// var dog = new Dog("Cooper", 20, 200);
// console.log(dog.getInfo());
// dog.bark();

// class Cat extends Pet {
//   constructor(name, weight, adoptionFee, brand) {
//     super(name, weight, adoptionFee);
//     this.brand = brand;
//   }
//   getFavoriteBrand() {
//     return this.brand;
//   }
//   getInfo() {
//     return "Hi, I'm a cat named " + this.name + " and I like " + this.brand +  ". I weigh " + this.weight + " pounds and my adoption fee is $" + this.adoptionFee + ".";
//   }
// }

// var honey = new Cat("Honey", 15, 300, "Purina");
// console.log(honey.getInfo());
// console.log(honey.getFavoriteBrand());
// console.log(honey.adoptionFee);

// var button = document.querySelector("#button");

// var clickCallback = function(event) {
//   console.log("You've clicked the button");
// }

// button.addEventListener("click", clickCallback);

var game = {
  "name": "Rocket League",
  "release": 2015,
  "developer": "Psyonix"
}

var gameJSON = JSON.stringify(game);
localStorage.setItem("game", gameJSON);

localStorage.setItem("restaurant", "chipotle");
var restaurant = localStorage.getItem("restaurant");
console.log(restaurant);


var gameJSON = localStorage.getItem("game");
var game = JSON.parse(gameJSON);
console.log(game);
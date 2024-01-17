// //complete this code
// class Animal {
// 	constructor(species){
// 		this._species = species;
// 	}
// 	get species(){
// 		return this._species;
// 	}
// 	makeSound(){
// 		console.log("animal sound");
// 	}
// }

// class Dog extends Animal {
// 	constructor(species){
// 		super(species);
// 	}
// 	bark(){
// 		console.log("woof");
// 	}
// }

// class Cat extends Animal {
// 	constructor(species){
// 		super(species);
// 	}
// 	purr(){
// 		console.log("purr");
//     }
// }

// // Do not change the code below this line
// window.Animal = Animal;
// window.Dog = Dog;
// window.Cat = Cat;
// Parent class: Animal
class Animal {
    constructor(species) {
        this._species = species; // Using _species to indicate it's a protected property
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to make a generic animal sound
    makeSound() {
        console.log("Animal sound");
    }
}

// Subclass: Cat, extends Animal
class Cat extends Animal {
    // Constructor for Cat
    constructor(species) {
        super(species); // Call the constructor of the parent class
    }

    // Method to make a cat-specific sound
    purr() {
        console.log("Purr");
    }
}

// Subclass: Dog, extends Animal
class Dog extends Animal {
    // Constructor for Dog
    constructor(species) {
        super(species); // Call the constructor of the parent class
    }

    // Method to make a dog-specific sound
    bark() {
        console.log("Woof");
    }
}

// Example usage
const genericAnimal = new Animal("Generic");
console.log(`Generic Animal Species: ${genericAnimal.species}`);
genericAnimal.makeSound(); // Output: Animal sound

const fluffyCat = new Cat("Fluffy Cat");
console.log(`Cat Species: ${fluffyCat.species}`);
fluffyCat.makeSound(); // Output: Animal sound
fluffyCat.purr(); // Output: Purr

const brownDog = new Dog("Brown Dog");
console.log(`Dog Species: ${brownDog.species}`);
brownDog.makeSound(); // Output: Animal sound
brownDog.bark(); // Output: Woof


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;


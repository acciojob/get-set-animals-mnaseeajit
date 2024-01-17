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

class Animal {
    constructor(species) {
        this._species = species; // Use a different name for the property to avoid conflicts
    }

    get species() {
        return this._species;
    }

    makeSound() {
        console.log("animal sound");
    }
}

class Dog extends Animal {
    constructor(species) {
        super(species);
    }

    bark() {
        console.log("woof");
    }
}

class Cat extends Animal {
    constructor(species) {
        super(species);
    }

    purr() {
        console.log("purr");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;


/** @format */

class Traveler {
	constructor(name) {
		this.name = name;
		this.food = 1;
		this.isHealthy = true;
	}

	hunt() {
		this.isHealthy += 2;
	}

	eat() {
		if (this.food <= 0) {
			this.isHealthy = false;
		} else {
			this.food++;
		}
	}
}

class Wagon {
	constructor(capacity) {
		this.capacity = capacity;
		this.passengers = [];
	}

	getAvailableSeatCount() {
		let emptySeats = this.capacity - this.passengers.length;
		return emptySeats;
	}

	join(traveler) {
		if (this.passengers.length < this.capacity) {
			this.passengers.push(traveler.name);
		} else {
			console.log("No more Room");
		}
	}

	shouldQuarantine() {
		if (!Traveler.isHealthy) {
			return true;
		}
	}

	totalFood() {
		let sum = 0;
		for (let person of this.passengers){

           person2 = eval(person)
		}
	}
}

// let wagon = new Wagon(2)
// // Create three travelers
// let henrietta = new Traveler('Henrietta')
// let juan = new Traveler('Juan')
// let maude = new Traveler('Maude')
// wagon.join(henrietta)
// wagon.join(juan)
// wagon.join(maude)  // There is no room for her!
// console.log(wagon.totalFood())
// console.log(wagon.passengers)
// wagon.totalFood()

// console.log(traveler)
// prettier-ignore
let wagon = new Wagon(2)
// Create three travelers
// prettier-ignore
let henrietta = new Traveler('Henrietta')
let juan = new Traveler("Juan");
let maude = new Traveler("Maude");
// console.log({juan, henrietta})

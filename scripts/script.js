/** @format */

class Traveler {
	constructor(name) {
		this.name = name;
		this.food = 1;
		this.isHealthy = true;
	}

	hunt() {
		this.food += 2;
	}

	eat() {
		if (this.food > 0) {
			this.food--;
		} else {
			this.isHealthy = false;
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
		// debugger;
		if(this.getAvailableSeatCount() >= 1) {
			this.passengers.push(traveler)
		}
	}

	shouldQuarantine() {
		// debugger;
		for (let i = 0; i < this.passengers.length; i++) {
			if (this.passengers[i].isHealthy === false) {
				return true
			}
			
		}
		return false
	}

	totalFood() {
		// debugger;
		let totalFood = 0;
		for (let i = 0; i < this.passengers.length; i++) {
			if(this.passengers[i].food === 0) {
				totalFood = totalFood
			} else {
			totalFood += this.passengers[i].food
			}
		}
		return totalFood
		}
	}


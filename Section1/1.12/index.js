//classes

//we could create a function and add methods on the function object using the prototype

//in js function are objects - inherit the behaviour of object
//whenever you create an object, the prototype object is also created behind the scene

// function Holiday(destination, days) {
//     this.destination = destination;
//     this.days = days;
// }

// Holiday.prototype.info = function () {
//     console.log(this.destination + " | " + this.days + " days");;
// }

// var nepal = new Holiday('Nepal',30);
// console.log(nepal.info());

//super class
class Holiday {
    constructor(destination, days){
        this.destination = destination
        this.days = days
    }

    info() {
        console.log(`${this.destination} will take ${this.days} days.`);        
    }
}

const trip = new Holiday('Kathmandu, Nepal', 30);
console.log(trip.info());

//sub class
class Expedition extends Holiday {
    constructor(destination, days, gear) {
        super(destination, days);
        this.gear = gear;
    }

    info() {
        super.info();
        console.log(`Bring your ${this.gear.join(' and your')}`);
        
    }
}

    const tripWithGear = new Expedition("Everest",30,["Sunglasses", "Flags","Camera"]);
    tripWithGear.info();









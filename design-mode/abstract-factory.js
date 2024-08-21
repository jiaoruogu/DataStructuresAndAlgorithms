

class Car {
  constructor() {
    this.name = "Car"
    this. wheels = 4
  }

  turnOn = () => console.log('cHACABUM!');
}

class Truck {
  constructor() {
    this.name = "Truck"
    this.wheels = 8
  }

  turnOn = () => console.log("RRRRRRRRRRRRRRRUUUUUUUUUMMMMMMM");
}

class Motorcycle {
  constructor() {
    this.name = "Motorcycle"
    this.wheels = 2
  }

  turnon = () => console.log("sssssssssssssssssssssssssssshhhhhhhhham");
}


const vehicleFactory = {
  createVehicle: function (type) {
    switch(type) {
      case 'car':
        return new Car;
      case 'truck':
        return new Truck();
      case 'motorcycle':
        return new Motorcycle();
      default:
        return null
    }
  }
}


const car = vehicleFactory.createVehicle("car")
const truck = vehicleFactory.createVehicle("truck")
const motorcycle = vehicleFactory.createVehicle("motorcycle")
//==========>Importing Vehicle and Wheel classes<==========
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

//=========>Motorbike class extends the Vehicle class, Declares properties  and type of the Motorbike class<============

class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  //=========> Creates a constructor that accepts the properties of the Motorbike class<==========

constructor(
  vin: string,
  color: string,
  make: string,
  model: string,
  year: number,
  weight: number,
  topSpeed: number,
  wheels: Wheel[],
 ) {

   //=========> constructor call the constructor of the parent class, Vehicle.initialize the properties of the Motorbike class and check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not <=========

   super()
  this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()];
 }


  //=========>Implement the wheelie method and logs the message<=========
  wheelie(): void {
    console.log (`Motorbike ${this.make} ${this.model} is doing a wheelie!`)
  }

  
  // =========>Override the printDetails method from the Vehicle, calls the printDetails method of the parent class and log the details of the Motorbike<==========
 override printDetails(): void {
  super.printDetails();
    console.log( `Vin: ${this.vin} \n Make:${this.make} \n Model: ${this.model} \n Year: ${this.year} \n Weight: ${this.weight} \n TopSpeed: ${this.topSpeed} \n Color: ${this.color} \n Wheels: ${this.wheels}`)

  }

}

// Export the Motorbike class as the default export
export default Motorbike;

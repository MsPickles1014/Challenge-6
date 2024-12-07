// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

//=====>Truck class extends the Vehicle class and implement the AbleToTow interface<===
// =====>Declare properties and type of the Truck class<=========
class Truck extends Vehicle  implements AbleToTow{
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  //======>Creates a constructor that accepts the properties of the Truck class<=====
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {

    //=====>calls the constructor of the parent class, Vehicle<=====
    super();

    // =======>The constructor initializes the properties of the Truck class and checks if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // =====>Implement the tow method from the AbleToTow interface, Gets the make an model of the vehicle if it exists and Checks if the vehicle's weight is less than or equal to the truck's towing capacity. If it is, logs that the vehicle is being towed or If it is not, log that the vehicle is too heavy to be towed<============
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleType = vehicle.constructor.name; // Determine the type of vehicle
    const vehicleDetails = `${vehicle.make} ${vehicle.model}`;
    
    if (vehicle.weight<= this.towingCapacity){
      console.log(`the vehicle ${vehicleType}: ${vehicleDetails} is being towed`);
    }else{
      console.log(`the ${vehicleType}: ${vehicleDetails}vehicle is too heavy to be towed`);
    }
    }
    // ========>Overrides the printDetails method from the Vehicle class, calls the printDetails method of the parent class, log the details of thrucks and include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels<=====
    override printDetails(): void {
      super.printDetails();
        console.log( `Vin: ${this.vin} \n Make:${this.make} \n Model: ${this.model} \n Year: ${this.year} \n Weight: ${this.weight} \n TopSpeed: ${this.topSpeed} \n Color: ${this.color} \n TowingCapacity: ${this.towingCapacity} \n Wheels: ${this.wheels}`)}
}

//======>Exports the Truck class as the default export<=======
export default Truck;

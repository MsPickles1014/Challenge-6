"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
var Vehicle_js_1 = require("./Vehicle.js");
var Wheel_js_1 = require("./Wheel.js");
//=====>Truck class extends the Vehicle class and implement the AbleToTow interface<===
// =====>Declare properties and type of the Truck class<=========
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    //======>Creates a constructor that accepts the properties of the Truck class<=====
    function Truck(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        //=====>calls the constructor of the parent class, Vehicle<=====
        var _this = _super.call(this) || this;
        // =======>The constructor initializes the properties of the Truck class and checks if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
        _this.vin = vin;
        _this.color = color;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        _this.weight = weight;
        _this.topSpeed = topSpeed;
        _this.towingCapacity = towingCapacity;
        if (wheels.length !== 4) {
            _this.wheels = [new Wheel_js_1.default(), new Wheel_js_1.default(), new Wheel_js_1.default(), new Wheel_js_1.default()];
        }
        else {
            _this.wheels = wheels;
        }
        return _this;
    }
    // =====>Implement the tow method from the AbleToTow interface, Gets the make an model of the vehicle if it exists and Checks if the vehicle's weight is less than or equal to the truck's towing capacity. If it is, logs that the vehicle is being towed or If it is not, log that the vehicle is too heavy to be towed<============
    Truck.prototype.tow = function (vehicle) {
        var vehicleType = vehicle.constructor.name; // Determine the type of vehicle
        var vehicleDetails = "".concat(vehicle.make, " ").concat(vehicle.model);
        if (vehicle.weight <= this.towingCapacity) {
            console.log("the vehicle ".concat(vehicleType, ": ").concat(vehicleDetails, " is being towed"));
        }
        else {
            console.log("the ".concat(vehicleType, ": ").concat(vehicleDetails, "vehicle is too heavy to be towed"));
        }
    };
    // ========>Overrides the printDetails method from the Vehicle class, calls the printDetails method of the parent class, log the details of thrucks and include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels<=====
    Truck.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("Vin: ".concat(this.vin, " \n Make:").concat(this.make, " \n Model: ").concat(this.model, " \n Year: ").concat(this.year, " \n Weight: ").concat(this.weight, " \n TopSpeed: ").concat(this.topSpeed, " \n Color: ").concat(this.color, " \n TowingCapacity: ").concat(this.towingCapacity, " \n Wheels: ").concat(this.wheels));
    };
    return Truck;
}(Vehicle_js_1.default));
//======>Exports the Truck class as the default export<=======
exports.default = Truck;

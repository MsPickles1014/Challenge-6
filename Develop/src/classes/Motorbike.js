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
//==========>Importing Vehicle and Wheel classes<==========
var Vehicle_js_1 = require("./Vehicle.js");
var Wheel_js_1 = require("./Wheel.js");
//=========>Motorbike class extends the Vehicle class, Declares properties  and type of the Motorbike class<============
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    //=========> Creates a constructor that accepts the properties of the Motorbike class<==========
    function Motorbike(vin, color, make, model, year, weight, topSpeed, wheels) {
        //=========> constructor call the constructor of the parent class, Vehicle.initialize the properties of the Motorbike class and check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not <=========
        var _this = _super.call(this) || this;
        _this.vin = vin;
        _this.color = color;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        _this.weight = weight;
        _this.topSpeed = topSpeed;
        _this.wheels = wheels.length === 2 ? wheels : [new Wheel_js_1.default(), new Wheel_js_1.default()];
        return _this;
    }
    //=========>Implement the wheelie method and logs the message<=========
    Motorbike.prototype.wheelie = function () {
        console.log("Motorbike ".concat(this.make, " ").concat(this.model, " is doing a wheelie!"));
    };
    // =========>Override the printDetails method from the Vehicle, calls the printDetails method of the parent class and log the details of the Motorbike<==========
    Motorbike.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("Vin: ".concat(this.vin, " \n Make:").concat(this.make, " \n Model: ").concat(this.model, " \n Year: ").concat(this.year, " \n Weight: ").concat(this.weight, " \n TopSpeed: ").concat(this.topSpeed, " \n Color: ").concat(this.color, " \n Wheels: ").concat(this.wheels));
    };
    return Motorbike;
}(Vehicle_js_1.default));
// Export the Motorbike class as the default export
exports.default = Motorbike;

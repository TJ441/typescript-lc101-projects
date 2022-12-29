"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToDestination = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToDestination = milesAway / this.speedMph;
        return hoursToDestination / 24;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToDestination(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
var spaceShuttle = new Spacecraft("Determination", 17500);
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation("Mars", kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation("The Moon", kilometersToTheMoon));

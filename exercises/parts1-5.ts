// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

import { SpaceLocation } from './SpaceLocation';

const kilometersToMars: number = 225000000;
const kilometersToTheMoon: number = 384400;

class Spacecraft {
  milesPerKilometer: number = 0.621;
  name: string;
  speedMph: number;

  constructor(name: string, speedMph: number) {
    this.name = name;
    this.speedMph = speedMph;
  }

  getDaysToDestination(kilometersAway: number): number {
    const milesAway: number = kilometersAway * this.milesPerKilometer;
    const hoursToDestination: number = milesAway / this.speedMph; 
    return hoursToDestination / 24;
  }

  printDaysToLocation(location: SpaceLocation) {
    console.log(`${this.name} would take ${this.getDaysToDestination(location.kilometersAway)} days to get to ${location.name}.`);
 }
}

let spaceShuttle = new Spacecraft("Determination", 17500)

spaceShuttle.printDaysToLocation(new SpaceLocation("Mars", kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation("The Moon", kilometersToTheMoon));

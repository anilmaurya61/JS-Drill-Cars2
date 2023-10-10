import inventory from "../Inventory/inventory.js";
import getLastCar from "../Problem/problem2.js";

const lastCar = getLastCar(inventory);

console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);
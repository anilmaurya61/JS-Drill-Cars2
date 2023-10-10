import inventory from "../Inventory/inventory.js";
import findById from "../Problem/problem1.js";

let id = 33;

const car = findById(inventory, id);

if(car.length > 0){
    console.log(`Car 33 is a ${car[0].car_year} ${car[0].car_make} ${car[0].car_model}`)
}else{
    console.log(`No car with id ${id} found`);
}

function sortCarModelsAlphabetically(inventory){
    return inventory.map((car)=>{
        return car.car_model;
    }).sort();
}

export default sortCarModelsAlphabetically;
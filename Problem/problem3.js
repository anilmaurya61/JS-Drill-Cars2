function sortCarModelsAlphabetically(inventory){
    const sortedCarModels = inventory.map((car)=>{
        return car.car_model;
    }).sort();
    return sortedCarModels;
}

export default sortCarModelsAlphabetically;
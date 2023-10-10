function getBMWAudiCars(inventory){
    return inventory.filter((car)=>{
        return car.car_make === "BMW" || car.car_make === "Audi";
    })
}

export default getBMWAudiCars;
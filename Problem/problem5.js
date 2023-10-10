function olderCarsCount(inventory, year){
    const oldCars = inventory.filter((car)=>{
        return car.car_year < year;
    })
    return oldCars.length;
}

export default olderCarsCount;
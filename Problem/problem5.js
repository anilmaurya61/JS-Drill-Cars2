function olderCarsCount(inventory, year){
    return inventory.filter((car)=>{
        return car.car_year < year;
    }).length;
}

export default olderCarsCount;
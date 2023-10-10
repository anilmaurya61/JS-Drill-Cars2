function getCarYears(inventory){
    return inventory.map((car)=>{
        return car.car_year;
    })
}

export default getCarYears;
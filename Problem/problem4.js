function getCarYears(inventory){
    const years = inventory.map((car)=>{
        return car.car_year;
    })
    return years;
}

export default getCarYears;
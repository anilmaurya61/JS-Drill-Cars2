function findById(inventory, id){
    const car = inventory.filter((car )=> {
        return car.id === id;
    });
    return car;
}


export default findById;
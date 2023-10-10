function findById(inventory, id){
    return inventory.filter((car )=> {
        return car.id === id;
    });
}


export default findById;
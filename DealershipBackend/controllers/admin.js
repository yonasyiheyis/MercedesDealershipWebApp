const cars = [{ id: 1, name: "Asaad Saad", course: "CS572", picture: "1570286884.jpg", grade: 95 },
{ id: 2, name: "volks", course: "CS572", picture: "1570286884.jpg", grade: 95 },
{ id: 3, name: "ferrari", course: "CS572", picture: "1570286884.jpg", grade: 95 }]

module.exports.getAll = async function (req, res) {
    let listofcars = getAllCars()
    console.log(listofcars)
    res.json(listofcars)
}

module.exports.getOne = async function (req, res) {
    const car = getOneCar(req.params.car_id)
    if (car != null) {
        res.json(car)
    }
    else {
        res.json({ msg: `No car with ID: ${req.params.car_id}` })
    }
}

function getAllCars() {
    return cars
}

function getOneCar(sid) {
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].id == sid) {
            return cars[i]
        }
    }
    return null
}
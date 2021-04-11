const { ObjectID } = require("bson")

const cars = [{ id: 1, name: "Asaad Saad", course: "CS572", picture: "1570286884.jpg", grade: 95 },
{ id: 2, name: "volks", course: "CS572", picture: "1570286884.jpg", grade: 95 },
{ id: 3, name: "ferrari", course: "CS572", picture: "1570286884.jpg", grade: 95 }]

module.exports.getAll = async function (req, res) {
    req.DB.collection('cars').find({}).limit(10).toArray((err, data) =>{
        console.log(data)
        res.json(data)
        // let listofcars = getAllCars()
    }) 
}

module.exports.getOne = async function (req, res) {
   
  
     const id = new ObjectID(req.params.car_id)

    console.log("getone" +id)
    req.DB.collection('cars').findOne({_id:  id},(err, data) =>{
   
    if (data != null) {
        res.json(data)
    }
    else {
        res.json({ msg: `No car with ID: ${parseInt(req.params.car_id)}` })
    }
})
}

module.exports.deleteById = async function(req,res) {
    const id = new ObjectID(req.params.car_id)

    console.log("getone" +id)
    req.DB.collection('cars').deleteOne({_id: id},   
    (err, data) => {
      console.log(data);
      res.json(data);
    }

    )}

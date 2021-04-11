const { ObjectID } = require("bson")


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
 
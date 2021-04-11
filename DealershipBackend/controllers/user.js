
module.exports.getusers = async function (req, res) {
    console.log('login ')
    req.DB.collection('users').find({}).limit(10).toArray((err, data) =>{
        console.log(data)
        res.json(data)
        // let listofcars = getAllCars()
    }) 
  }




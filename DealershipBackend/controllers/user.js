

module.exports.getusers = async function (req, res) {
    console.log('login ')
    req.DB.collection('users').find({}).limit(10).toArray((err, data) =>{
        console.log(data)
        res.json(data)
        // let listofcars = getAllCars()
    }) 
  }



module.exports.addUser = async function (req, res) {
    req.DB.collection('users').insertOne(req.body, function (err, res) {
        if (err) throw err;
    })
    res.json({ 'ok': `Added user ${req.body.firstName}` })
}


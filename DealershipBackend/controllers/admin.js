module.exports.addCar = async function (req, res) {
    req.DB.collection('cars').insertOne(req.body, function (err, res) {
        if (err) throw err;
    })
    res.json({ 'ok': `Added car ${req.body.model}` })
}

module.exports.updateCar = async function (req, res) {

    const id = new ObjectID(req.body._id)
    console.log(id + ": " + req.body._id)
    var query = { _id: id };
    var newvalues = {
        $set: {
            brand: req.body.brand,
            model: req.body.model,
            type: req.body.type,
            year: req.body.year,
            price: req.body.price,
            engine: req.body.engine,
            transmission: req.body.transmission,
            color: req.body.color,
            mpg: req.body.mpg,
            pictureUrl: req.body.pictureUrl,
        }
    };

    req.DB.collection('cars').updateOne(query, newvalues, function (err, res) {
        if (err) throw err;
    })
    res.json({ 'ok': `Updated car ${req.body.model}` })
}
const { ObjectID } = require("bson")


module.exports.getAll = async function (req, res) {
    req.DB.collection('cars').find({}).limit(10).toArray((err, data) => {
        //console.log(data)
        res.json(data)
        // let listofcars = getAllCars()
    })
}



module.exports.getOne = async function (req, res) {


    const id = new ObjectID(req.params.car_id)

    console.log("getone" + id)
    req.DB.collection('cars').findOne({ _id: id }, (err, data) => {

        if (data != null) {
            res.json(data)
        }
        else {
            res.json({ msg: `No car with ID: ${parseInt(req.params.car_id)}` })
        }
    })
}

module.exports.deleteById = async function (req, res) {
    const id = new ObjectID(req.params.car_id)

    console.log("getone" + id)
    req.DB.collection('cars').deleteOne({ _id: id },
        (err, data) => {
            console.log(data);
            res.json(data);
        }

    )
}


module.exports.deleteCar = async function (req, res) {
    const id = new ObjectID(req.body._id)
    console.log(req.body._id, ": ", id)
    req.DB.collection('cars').deleteOne({ _id: id },
        (err, data) => {
            if (err) throw err;
            res.json({ 'ok': `Deleted car ${req.body.model}` });
        }

    )
}
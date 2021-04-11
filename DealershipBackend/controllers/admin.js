module.exports.addCar = async function (req, res) {
    req.DB.collection('cars').insertOne(req.body, function (err, res) {
        if (err) throw err;
    })
    res.json({ 'ok': `Added car ${req.body.model}` })
}

module.exports.updateCar = async function (req, res) {

    var query = { model: req.body.model };
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
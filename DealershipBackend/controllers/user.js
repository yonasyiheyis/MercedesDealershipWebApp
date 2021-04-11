module.exports.addUser = async function (req, res) {
    req.DB.collection('users').insertOne(req.body, function (err, res) {
        if (err) throw err;
    })
    res.json({ 'ok': `Added user ${req.body.firstName}` })
}
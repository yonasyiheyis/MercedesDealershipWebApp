// const express = require('express')
// const bcrypt = require("bcryptjs")
// const jwt  = require('jsonwebtoken')
// const User = require('../model')

// const route = express.Router()



// module.exports.signup = async function (req, res) {
//     console.log(req.body)
//     if (!req.body.name||!req.body.email||!req.body.password){
//         res.status(400).send('all fields are required')
//     }

//     return bcrypt
//     .hash(req.body.password,12)
//     .then((hased)=>{
//         let user = new User( {
//             name:req.body.name,
//             email:req.body.email,
//             password:hased


//         })
//       return  user.save()

//     })
//     .then(user=>{
//         const token = jwt.sign({email:user.email},"sami",{
//             expiresIn:3600,
//         })
//         res.status(200).send(token)
//     })
//     .catch(err=>res.send(err))
// }


// module.exports.signin = async function (req, res) {
//     if (!req.body.email||!req.body.password){
//         res.status(400).send('all fields are required')
//     }

//   User.find({email:req.body.email})

//     .then(user=>{
//         const token = jwt.sign({email:user.email},"sami",{
//             expiresIn:3600,
//         })
//         res.status(200).send(token)
//     })
//     .catch(err=>res.send(err))
// }

// module.exports = route
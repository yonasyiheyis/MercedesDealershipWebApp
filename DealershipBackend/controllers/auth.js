var express = require("express");
const route = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.login = async function (req, res) {
  console.log("auth entered");
  // if (!req.body.email||!req.body.password){

  // return    res.status(400).send('all fields are required')

  // }


  console.log(req.body.email);
  req.DB.collection("users").findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (!user) {
        return res.status(200).send({ success: 0 });
      } else {
        const token = jwt.sign({ email: user.email }, "token", {
          expiresIn: 3600,
        });
        console.log(token);
        finalObj = { success: 1, role: user.role, token: token };
        res.status(200).send(finalObj);
      }

    }
  });
};

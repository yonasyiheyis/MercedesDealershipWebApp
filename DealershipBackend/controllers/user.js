var nodemailer = require("nodemailer");
const { ObjectID } = require("bson");

module.exports.getusers = async function (req, res) {
  console.log("login ");
  req.DB.collection("users")
    .find({})
    .limit(10)
    .toArray((err, data) => {
      console.log(data);
      res.json(data);
      // let listofcars = getAllCars()
    });
};

module.exports.addUser = async function (req, res) {
  const pass = require('crypto').createHash('sha1').update(req.body.password).digest('base64');
  req.body.password = pass
  req.DB.collection('users').insertOne(req.body, function (err, res) {
    if (err) throw err;
  })
  res.json({ 'ok': `Added user ${req.body.firstName}` })
}

module.exports.pay = async function (req, res) {
  console.log("payment.......")
  //  const id = new ObjectID(req.body.car_id)

  console.log("email" + req.body.payment.email)
  req.DB.collection('users').findOne({ email: req.body.payment.email }, (err, users) => {
    if (err) {
      console.log(err);

    } else {
      if (!users) {
        return res.status(200).send({ success: 0 });
      } else {
        console.log("Email sent: " + info.response);
        //

        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,

          auth: {
            service: 'gmail',
            user: 'yshmercedes@gmail.com',
            pass: '!'
          }
        });
        const mailOptions = {
          from: 'yshmercedes@gmail.com',
          to: req.body.payment.email,
          subject: 'payment notification',
          text: `congratulations  ${req.body.payment.name} ,
                        your order detail is as follows :
                              brand:        ${req.body.car.brand} 
                              model:        ${req.body.car.model} 
                              type:         ${req.body.car.type} 
                              year:         ${req.body.car.year} 
                              engine:       ${req.body.car.engine} 
                              transmission: ${req.body.car.transmission} 
                              color:        ${req.body.car.color}
                             
                        placed with a payment of $ ${req.body.car.price} to the provided address : ${req.body.payment.billing_Address}
                                
                        thank you for choosing us !
                        our happiness comes from your satisfaction on our product
                           
                          Best Regards,
                          MercedesBenz
                          Mercedes Dr
                          Vance, AL, 35490
                          800-000-0000 `
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
            //


            //
          }
        });
        //
        //  
        const id = new ObjectID(req.body.car._id)

        console.log("delete by id car" + id)
        req.DB.collection('cars').deleteOne({ _id: id },
          (err, data) => {
            console.log(data);
            return res.json({ success: 1, deleted: 1, emailsent: 1 });
          })
        //
      }
      //
    }
  });
}

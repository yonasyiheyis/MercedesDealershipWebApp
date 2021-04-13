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
    });
};

module.exports.addUser = async function (req, res) {
  req.DB.collection("users").insertOne(req.body, function (err, res) {
    if (err) throw err;
  });
  res.json({ ok: `Added user ${req.body.firstName}` });
};

module.exports.pay = async function (req, res) {
  console.log("payment.......");

  console.log("email" + req.body.payment.email);
  req.DB.collection("users").findOne(
    { email: req.body.email },
    (err, users) => {
      if (err) {
        console.log(err);
      } else {
        if (!users) {
          return res.status(200).send({ success: 0 });
        } else {
          const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,

            auth: {
              service: "gmail",
              user: "yshmercedes@gmail.com",
              pass: "mercedes123!",
            },
          });
          const mailOptions = {
            from: "yshmercedes@gmail.com",
            to: req.body.email,
            subject: "payment notification",
            text: "payment confirmation ",
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });

          const id = new ObjectID(req.body.car_id);

          console.log("delete by id car" + id);
          req.DB.collection("cars").deleteOne({ _id: id }, (err, data) => {
            console.log(data);
            return res.json({ success: 1, deleted: 1, emailsent: 1 });
          });
        }
      }
    }
  );
};

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const cors = require("cors");

const { MongoClient } = require("mongodb");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var adminRouter = require("./routes/admin");
var authRouter = require("./routes/auth");

const uri = "mongodb+srv://yonas:mwaprojectyonas@cluster0.jizzk.mongodb.net/Dealership?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

let DB = null;
// DB added to request
app.use(async (req, res, next) => {
  try {
    if (DB) {
      req.DB = DB;
    } else {
      await client.connect();
      DB = client.db("Dealership");
      req.DB = DB;
    }
    next();
  } catch (error) {
    console.log(error);
  }
});

//routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);
app.use("/auth", authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(404).json({ msg: `Page not found!!! ${err}` });
});

module.exports = app;

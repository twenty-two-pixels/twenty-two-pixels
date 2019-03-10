const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const hbs = require("hbs");
const Page = require("./services/page");

const indexRouter = require("./routes/index");
const contactRouter = require("./routes/contact");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(Page.applyResGlobals());
app.use("/", indexRouter);
app.use("/contact", contactRouter);

// catch 404 and forward to error handler
app.use((req, res) => {
  res.locals.message = "Whoops!";
  res.locals.error = { status: "The resource you are looking for cannot be found."};

  res.status(404);
  res.render("error");
});
// app.use((req, res, next) => next(createError(404)));

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

const exp = require("constants");
const { hasSubscribers } = require("diagnostics_channel");
const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 8000;

app.set("view engine", "hbs");



//path Files
app.use(express.static(path.join(__dirname, "../public")));
app.set("views", path.join(__dirname, "../template/views"));
hbs.registerPartials(path.join(__dirname, "../template/partials"));



//Main express Part
app.get("/", (req,res) => {
    res.render("index");
});

app.get("/about", (req,res) => {
    res.render("about");
});

app.get("/weather", (req,res) => {
    res.render("weather");
});

app.get("*", (req,res) => {
    res.render("404error" ,{
        errormsg : "Oops! Page Not Found"
    });
});


//Listen Port
app.listen(port, () => {
    console.log(`success ${port}`)
});
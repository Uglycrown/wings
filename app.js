const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const _ = require("lodash");
const router = require(path.join(__dirname, "/router/index.js"));

const app = express();
const port = process.env.PORT || 3000;

// Middleware and Configuration
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// Use the router
app.use('/', router);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
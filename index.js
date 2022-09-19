// Import packages
const express = require("express");
const home = require("./routes/home");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");

// Middlewares
const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


// Routes
app.use("/home", home);

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("/",  (req, res)=> {
    app.use(express.static(__dirname,'frontend','build'))
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
});

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));

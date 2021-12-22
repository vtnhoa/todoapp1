const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = 8080;

const app = express();

const todoRoutes = require("./routes/todo");

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/todoapp', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err) => {
    if(!err) {
        console.error('MongoDB Connection Succeeded.');
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

app.use(cors());
app.use(bodyParser.json());

app.use("/api", todoRoutes);

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});
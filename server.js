//external npm packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const app = express();
const databaseName = "Fitness-Tracker_db";

//assign port
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

//compresses all files
app.use(compression)

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


//access database
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/Fitness-Tracker_db",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  .then(() => console.log(`successfully connected to database: ${databaseName}`));

  //access routes 

  // <a href='/stats'>Home</a>
  // $.post('/api/workouts', data)
const routes = require("./routes");
app.use(routes)

//listen to port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
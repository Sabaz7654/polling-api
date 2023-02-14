const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://polling_api:UJ3BtP05DgjsTA0E@cluster0.6bocakf.mongodb.net/polling_api?retryWrites=true&w=majority");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", () => {
  console.log("Connected to Database : MongoDB");
});

module.exports = db;

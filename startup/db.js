const mongoose = require("mongoose");
const config = require("config");
module.exports = async function () {
await mongoose.connect(config.get('db'),{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to Database`));
};

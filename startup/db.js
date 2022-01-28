const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
    mongoose
    .connect(mongoose.connect(config.get('db')), { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to ${dbUri}...`)).catch((e) => {throw new Error(e)});
};

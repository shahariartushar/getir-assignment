const mongoose = require("mongoose");
module.exports = function() {
    const dbUri = "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true";
    mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log(`Connected to ${dbUri}...`));
}

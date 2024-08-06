const mongoose = require("mongoose");
const { DB_URI } = require("../config/serverConfig");

const dbConnect = async () => {
    await mongoose.connect(DB_URI);
}

module.exports = dbConnect;

const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
    Mac: String,
    User: String,
    Description: String,
    Hour: Date,
    Country: String,
    Ip:String
});
module.exports = (connection) => connection.model("User", UserSchema)

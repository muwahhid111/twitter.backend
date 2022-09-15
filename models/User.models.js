const mongoose = require('mongoose');
const usersSchema = mongoose.Schema({
username: String,
saved: [
    {
        ref: "Post",
        type: mongoose.Schema.Types.ObjectId
    }
],
liked: [
    {
        ref: "Post",
        type: mongoose.Schema.Types.ObjectId
    }
]

});
const Users = mongoose.model("Users", usersSchema);
module.exports = Users;

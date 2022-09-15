const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
text: String,
userId: {
    ref: "Users",
    type: mongoose.Schema.Types.ObjectId
},
like:[{
    ref: "Users",
    type: mongoose.Schema.Types.ObjectId
}]
 

})
const Post = mongoose.model('Post', postSchema);
module.exports = Post;
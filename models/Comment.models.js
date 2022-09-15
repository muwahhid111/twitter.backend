const mongoose =  require('mongoose');
const commentsSchema = mongoose.Schema({
text: String,
userId: {
    ref: "Users",
    type: mongoose.Schema.Types.ObjectId
},
postId: {
    ref: "Post",
    type: mongoose.Schema.Types.ObjectId
}
});

const Comments = mongoose.model("Comments", commentsSchema);
module.exports = Comments;


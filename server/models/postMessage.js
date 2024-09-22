import mongoose from "mongoose";


const postSchema = mongoose.Schema({

    title: String,
    messsage: String,
    creator: String,
    tags: [String], // array of tags for the message (ex: "funny", "hilarious") - not required to be unique
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {

        type: Date,
        default: new Date()

    },

});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
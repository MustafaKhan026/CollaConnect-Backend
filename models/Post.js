const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    no_of_collabs: {
        type: Number,
        required: true
    },
    creator_email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    deadline:{
    type:String,
        required:true
    },
    { timestamps: true }
})

module.exports = mongoose.model("Post", PostSchema);


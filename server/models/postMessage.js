import mongoose from "mongoose";


//kif lshakel bl database ya3ne eache post lezem ykon 3ndo kaza


const postSchema = mongoose.Schema({
    title: String,
    description: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String], default: [] },
    comments: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage; // exporting a mongoose model from a file to later on make functions mtl find delete and 3elten

const mongoose = require('mongoose')
const Blog = require('./Blog')
const { Schema, model, SchemaTypes } = mongoose

const commentSchema = new Schema({
    user: {
        type: SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        default: () => Date.now()
    },
    blog: {
        type: SchemaTypes.ObjectId,
        ref: "Blog"
    }
})

commentSchema.pre("save", async function(next){
    const comment = this

    const blog = await Blog.findById(comment.blog.toString())
    blog.comments.push(this)
    blog.save() //save a created blog/save an updated blog
    next()
})

const Comment = model("Comment", commentSchema)
module.exports = Comment
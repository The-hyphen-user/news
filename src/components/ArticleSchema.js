const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title:String,
    id:Number,
    type:String,
    text:String
})

module.exports = mongoose.module('ArticleSchema', articleSchema);
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema({

        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        details:{
            type:String,
            required:true
        },
        coments:{
            type:String,
            required:true
        }


})

let BlogDATA = mongoose.model('blogdetail',BlogSchema)
module.exports = BlogDATA
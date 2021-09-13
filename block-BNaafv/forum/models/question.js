var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
    title:String,
    author:String,
    slug:String,
    userId:{type:Schema.Types.ObjectId,required:true,ref:'User'}
},{timestamps:true});

var Question = mongoose.model('Question',questionSchema);

module.exports = Question;
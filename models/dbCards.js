const mongoose = require ('mongoose');
const {Schema} = mongoose;

const cardSchema= new Schema({
    name: {type:String,required:true},
    imgUrl:{type:String,required:true}
});


module.exports = mongoose.model('cards', cardSchema);
const mongoose = require ('mongoose');
const Schema = mongoose.Schema


const userSchema = new Schema({
   messageby:{
       type:String
   },
   message:{
       type:String
   }
})

const msg = mongoose.model('Chat',userSchema,'Chat');

module.exports = msg


const Chat = require('../model/messageSchema')
const getData =async (data) =>{

  let Data = new Chat ({
      messageby:data.messageby,
      message:data.message
  })
   let response = await Data.save()
   
}

const FetchSocket =async (req ,res) =>{

   try{
    let Data =await Chat.find({})
   
    if(Data){
        return Data
    }else{
        return res.status(400).json({status:false , message:'DB Not Found'})
    }
    
   }catch(err){
       return res.statsu(500).json({status:false , message:'catch err'})
   }
}

module.exports = {
    getData,
    FetchSocket
}
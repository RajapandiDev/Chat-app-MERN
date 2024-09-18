const axios = require ('axios')


export const FetchChat =async () =>{

  try{
    const respData =await axios({
        'method':'get',
        'url':'http://localhost:2053/Api/fetch'
    })
    if(respData.data.status){
        return{
            status:respData.data.status,
            result:respData.data.data
        }
    }
  }catch(err){
    return{
        status:err.response.data.status,
        message:err.response.data.message,
        errors:err.response.data.error
    }
  }
} 

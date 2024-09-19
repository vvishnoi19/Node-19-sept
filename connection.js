const mongoose=require("mongoose")

async function connection(){
    try{
        await mongoose.connect(`mongodb://127.0.0.1:27017/batch-3`)
        console.log("data base connected....")

    }
    catch(err){
        console.log(err)

    }
}
module.exports=connection;
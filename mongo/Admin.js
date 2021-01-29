
const mongoose=require("mongoose")
const Schema=mongoose.Schema({
    Center:{
       type:mongoose.SchemaTypes.ObjectId,
       ref:"center"
   }
})
const Admin = mongoose.model("Admin", Schema,"Admin")
// Admin.insertMany({
//     "UserName": "super",
//     "Password": "123",
//     "Level": "Super",
//     "LevelCode": 99,
//     "NickName": "陈pp"
//   })
module.exports = Admin
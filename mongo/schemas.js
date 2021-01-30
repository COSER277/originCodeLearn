
const mongoose=require("mongoose")


const Admin = mongoose.model("Admin", mongoose.Schema({
    NickName:String
}), "Admin")
const Center = mongoose.model("Center", mongoose.Schema(), "Center")
const Department = mongoose.model("Department", mongoose.Schema(), "Department")
const Employee = mongoose.model("Employee", mongoose.Schema({
    OaCount:String,
    OaPassword:{type:String,
     default: new Date().getFullYear()+""+new Date().getMonth()+1+""+new Date().getDate(),
    select: false,
    },
    NickName:String,

}), "Employee")
const Ticket = mongoose.model("Ticket", mongoose.Schema({
    User:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Employee"
    },
    //详情联
    Title: {
        type: String,
        default: ""
    },
     //审核联
     Processor: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Admin"
    },
    //
}), "Ticket")
const TicketApply = mongoose.model("TicketApply", mongoose.Schema(), "TicketApply")
const Process = mongoose.model("Process", mongoose.Schema(), "Process")
const Leave = mongoose.model("Leave", mongoose.Schema(), "Leave")

module.exports={Center,Department,Employee,Ticket,TicketApply,Process,Leave,Admin}
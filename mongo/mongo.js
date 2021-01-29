
const mongoose = require("mongoose")
const CONFIG = {
    dev: {
        URL: "mongodb://127.0.0.1:27017/wlink?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
    }
}
//数据库配置
var option = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    auto_reconnect: true,
    useUnifiedTopology: true,
}
//连接数据库
mongoose.connect(CONFIG.dev.URL, option);
const db = mongoose.connection;
db.once('open', () => {
    console.log('************数据库信息**************')
    console.log('连接成功');
    console.log('***********************************')
})
db.on('error', function (error) {
    console.log('************数据库信息**************')
    console.error('数据库连接失败: ' + error.message);
    console.log('***********************************')
    mongoose.connect(CONFIG.dev.URL, option.auto_reconnect);

});
db.on('close', function () {
    console.log('************数据库信息**************')
    console.log('数据库已关闭！');
    console.log('***********************************')
    mongoose.disconnect()
});
/***
 **注册需要的集合
 */

const Admin = mongoose.model("Admin", mongoose.Schema(null), "Admin")
const Center = mongoose.model("Center", mongoose.Schema(), "Center")
const Department = mongoose.model("Department", mongoose.Schema(), "Department")
const Employee = mongoose.model("Employee", mongoose.Schema(), "Employee")
const Ticket = mongoose.model("Ticket", mongoose.Schema(), "Ticket")
const TicketApply = mongoose.model("TicketApply", mongoose.Schema(), "TicketApply")
const Process = mongoose.model("Process", mongoose.Schema(), "Process")
const Leave = mongoose.model("Leave", mongoose.Schema(), "Leave")


let Collects = {
    Admin,
    Center,
    Department,
    Employee,
    Ticket,
    TicketApply,
    Process,
    Leave
}

// console.log(Collects);
module.exports = {
    Collects: Collects,
    db
}
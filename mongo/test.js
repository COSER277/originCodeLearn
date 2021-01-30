const opertor = require('./common')


opertor.selectById("Ticket","6014fe85fe97645f480d6260").then(res => {
        console.log(res);
    }).catch(e => {
        console.error(e);
    })

// opertor.selectByOpts("Ticket", {}, {
//     PageNumber: 1,
//     PageSize: 50
// }, {
//     Key: "LevelCode",
//     Order: -1
// }).then(res => {
//     console.log(res);
// }).catch(e => {
//     console.error(e);
// })
// opertor.insertToFiled("Process", "6014da5c629fed3c28cc0b31", "Datas", {Id:"5ffece7677f6b54a7c3b3276"}).then(res => {
//     console.log(res);
// }).catch(e => {
//     console.error(e);
// })
// opertor.insertOne("Admin", {
//     NickName:"Admin"
// }).then(res=>{
//     console.log(res);
// }).catch(e=>{
//     console.error(e);
// })

// opertor.deleteByOpt("Admin", {
//     _id: "60140a1098b9d64aa4b564de"
// }).then(res => {
//     console.log(res);
// }).catch(e => {
//     console.error(e);
// })
// opertor.deleteById("Admin","60140ba07fd751258cd8f450").then(res=>{
//     console.log(res);
// }).catch(e=>{
//     console.error(e);
// })

// opertor.updateByOpt("Admin", {
//     _id: "6014ff0e995a370f880c81f5"
// }, {
//     NickName:"ADMIN",
// }).then(res => {
//     // console.log(res);
// }).catch(e => {
//     console.error(e);
// })
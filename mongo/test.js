const opertor = require('./common')




opertor.selectByOpts("Admin", {},{PageNumber:1,PageSize:1}).then(res => {
    console.log(res);
}).catch(e => {
    console.error(e);
})

// opertor.insertOne("Admin", {
//     NickName: "TTTT"
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
//     _id: "60140be969c16e66f0bcc7c6"
// }, {
//     Name: "ssdsdsd"
// }).then(res => {
//     console.log(res);
// }).catch(e => {
//     console.error(e);
// })
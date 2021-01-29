const opertor = require('./common')




opertor.selectByOpts("Admin", {},{PageNumber:1,PageSize:50}).then(res => {
    console.log(res);
}).catch(e => {
    console.error(e);
})

// opertor.insertOne("Admin", {
//     Center: "5ffece7677f6b54a7c3b3276"
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
//     _id: "601413b255457237b4758225"
// }, {
//     Center: "5ffecf8b77f6b54a7c3b3278"
// }).then(res => {
//     console.log(res);
// }).catch(e => {
//     console.error(e);
// })
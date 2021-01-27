import Axios from './core/axios-mini'



let axios = Axios.create({
    baseUrl: "http://47.107.111.241:3333",
    headers: {
        common: "121212",
        Authorization: "Bear sdsdsdsd"
    }
})

axios.get({
    url: '/c/api',
    headers:{
        common:"X-XMLHttp-Request"
    }
}).then(res=>{
    console.log(res)
})


// axios.post({
//     url: '/c/api',
//     headers: {
//         Authorization: "Bear 1212121",
//         common:"X-XMLHttp-Request"
//     },
//     params: {
//         name: "sdsd",
//         pwd: "sdsd"
//     }
// }).then(res=>{
//     console.log(res)
// }).catch(e=>{
//     console.log(e);
// })
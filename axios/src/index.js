import Axios from './core/axios-mini'


let axios1=Axios.create({
    baseUrl:"http://xxxxxx:xxx",
    headers:{
        common:"121212",
        Authorization:"Bear sdsdsdsd"
    }
})

let axios2=Axios.create({
    baseUrl:"http://localhost:xxx",
    headers:{
        common:"121212",
        Authorization:"Bear sdsdsdsd"
    }
})
console.log(axios1.default);

console.log(axios2.default);


import Axios from './core/axios-mini'



let axios=Axios.create({
    baseUrl:"http://xxxxxx:xxx",
    headers:{
        common:"121212",
        Authorization:"Bear sdsdsdsd"
    }
})

axios.get({
    method:"get",
    url:'./1.json'
})

axios.get('./1.json')


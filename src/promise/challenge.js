const fetchData = require("../utils/fetchData")
const API = 'https://rickandmortyapi.com/api/character/'

fetchData(API)
    .then((charactersData)=>{
        console.log(charactersData.info.count)
        return fetchData(`${API}${charactersData.results[0].id}`)
    })
    .then((RicksData) => {
        console.log(RicksData.name)
        return fetchData(RicksData.origin.url)
    })
    .then((RicksLocationData) => {
        console.log(RicksLocationData.dimension)
    })
    .catch((error)=>{
        console.log(error)
    })
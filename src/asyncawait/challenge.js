const fetchData = require("../utils/fetchData")
const API = 'https://rickandmortyapi.com/api/character/'

const printRicksData = async () => {
    try{
        const charactersData = await fetchData(API)
        const RicksData = await fetchData(`${API}${charactersData.results[0].id}`)
        const RicksOriginData = await fetchData(RicksData.origin.url)

        console.log(charactersData.info.count)
        console.log(RicksData.name)
        console.log(RicksOriginData.dimension)

    }catch(error){
        console.log(error)
    }
}

console.log('Before')
printRicksData()
console.log(`After, Oh no wait it's async`)
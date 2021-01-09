const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url){
    return new Promise((resolve,reject) => {
        let xhttp = new XMLHttpRequest()
        xhttp.open('GET', url, true)
        xhttp.onreadystatechange = (event) => {
            if(xhttp.readyState === 4){
                if(xhttp.status === 200){
                    resolve(JSON.parse(xhttp.responseText))
                }else{
                    reject(new Error('Error' + url_api))
                }
            }
        }
        xhttp.send()
    })
}

module.exports = fetchData

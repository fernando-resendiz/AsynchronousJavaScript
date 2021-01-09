const somethingWillHappen = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            resolve(`It's happening!!!`)
        }else{
            reject('Whooops!')
        }
    })
}

const somethingWillHappenSometime = () => {
    return new Promise((resolve,reject) => {
        if(true){
            setTimeout(()=>{
                resolve('It finally happened')
            },3000)
        }else{
            const error = new Error('It will never happen')
            reject(error)
        }
    })
}

somethingWillHappen()
    .then((message) => {
        console.log(message)
        return somethingWillHappen()
    })
    .then((message) => console.log(message))
    .catch((errorMessage) => console.log(errorMessage))

somethingWillHappenSometime()
    .then((message) => console.log(message) )
    .catch((errorMessage) => console.log(errorMessage))

Promise.all([somethingWillHappen(),somethingWillHappenSometime()])
    .then((results) => console.log('Array of results:', results))
    .catch((error) => console.log(error))
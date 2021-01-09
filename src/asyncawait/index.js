const doSomethingAsync = () => {
    return new Promise((resolve,reject) => {
        if(true){
            setTimeout(() => resolve('I did something Async'),3000)
        }else{
            reject(new Error('Test Error'))
        }
    })
}

const answerQuestion = async () => {
    const something = await doSomethingAsync()
    console.log(something)
}

const sameAnswerButDifferent = async () => {
    try{
        const something = await doSomethingAsync()
        console.log(`Yeah I'm sure I did something Async`)
    }catch(error){
        console.log(error)
    }
}

answerQuestion()
sameAnswerButDifferent()
console.log('What did you do?')


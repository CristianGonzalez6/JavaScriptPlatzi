const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 3000)
            : reject(new Error('Test Error'))
    });
}

const doSomethingAwait = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before')
doSomethingAwait();
console.log('After')

const anotherFunction = async () => {
    try{
        const something = await doSomethingAsync();
        console.log(something);
    } catch(error) {
        console.log(error);
    }
}

console.log('Before 2')
anotherFunction();
console.log('After 2')
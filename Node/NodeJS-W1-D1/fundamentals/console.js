console.log('Hello World')
console.warn('This is a warning')
console.error('This is an error')
console.error(new Error('This is also an error!'))

// console.trace()
const smallFunction = function(){
    console.trace('This is a trace')
}
const bigFunction = function(){
    smallFunction()
}

bigFunction()

// console.time()
console.time('for loop time')
for(let i = 0; i < 10000; i++){
    //processing...
}
console.timeEnd('for loop time')


const tableSample = [
    {
        Fruit: "Apple",
        Quantity: 5,
        Shops: [
            { name: "Safeway", branch: "Main" },
            { name: "IGA", branch: "Robson" },
        ]
    },
    {
        Fruit: "Kiwi",
        Quantity: 15
    }
]

console.log(tableSample);
console.table(tableSample);


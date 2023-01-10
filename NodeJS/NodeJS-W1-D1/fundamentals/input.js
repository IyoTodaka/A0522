console.log(process.argv[2]);
//node input.js <INPUT>

//importing readline module (built-in/core module)
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const query = 'What is your name? ';

rl.question(query, (answer) => { 
    console.log(`Your name is ${answer}`);

    //this method closes the readline interface
    //this method informs the interface that we are done
    //with our console I/O and NodeJS can proceed further
    rl.close(); 
})
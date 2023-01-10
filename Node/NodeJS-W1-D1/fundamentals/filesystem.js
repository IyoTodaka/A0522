const fs = require('fs');

console.log("This is the first log");

fs.mkdir('./asset/images', {}, (err) =>{
    if(err){
        console.error(err)
        return;
    }
    console.log('Folder created')
})

const content = "This is the content to write to the file"
fs.writeFile('./asset/test.txt', content, (err) => {
    if(err){
        console.error(err)
        return
    }
    console.log('File has been written')
})

const contentToAdd = "\nThis is the content to add to the file"
fs.appendFile('./asset/test.txt', contentToAdd, (err, data) => {
    if(err){
        console.error(err)
        return
    }
    console.log('File has been appended')
})

fs.readFile('./asset/test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
})

fs.stat('./asset/test.txt', (err, stats) => {
    if(err){
        console.error(err)
        return;
    }
    console.log(stats);
})
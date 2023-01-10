//Buffer - an array of data of bytes (binary data - Unit8Array) 
//Buffer is a global object in nodejs

const buf1 = Buffer.alloc(10); //allocates 10 bytes of memory
console.log(buf1);

const buf2 = Buffer.allocUnsafe(10); //allocates 10 bytes of memory
console.log(buf2);

const buf3 = Buffer.from('Hello World'); //allocates 10 bytes of memory
console.log(buf3);
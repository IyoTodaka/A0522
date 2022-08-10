function removeDupes(str){
   
    str = str.split('');
    str = str.filter(function (x, i, self) {
     return self.indexOf(x) === i;
    });

    str = str.join(',');
    str = str.replace(/,/g, '');
    return str
}

console.log(removeDupes('aabbccdd'))
console.log(removeDupes('abcd'))
console.log(removeDupes('abcdabcd'))
console.log(removeDupes('ababcdcd'))
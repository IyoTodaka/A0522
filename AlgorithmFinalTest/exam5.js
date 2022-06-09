function isPalindrome(str){
    if(str.length ===0 ||str.length ===1) return true
    if(str.charAt(0) != str.charAt(str.length-1)) return false
    
   return isPalindrome(str.slice(1,str.length-1))  

}

console.log(isPalindrome('awesome'))
console.log(isPalindrome('foobar'))
console.log(isPalindrome('tacocat'))
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('amanaplanacanalpandemonium'))
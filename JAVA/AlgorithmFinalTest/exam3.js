function productOfArray(arr){
    
    if (arr.length==2) return arr[0]*arr[1]

   
   let arr2 = Array.from(arr)
   arr2.shift()
   arr[0]= arr[0] * (productOfArray(arr2))
   
   return arr[0]
}
console.log(productOfArray([1,2,3]))
console.log(productOfArray([1,2,3,10]))

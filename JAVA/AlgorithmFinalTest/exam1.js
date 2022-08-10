let input1 = [3,11,7,2,9,10]
let input2 = [-1,110,1,1,0]

function sumArray(values){
   return values.reduce((sum,ele)=> sum + ele,0)

}

console.log(sumArray(input1))
console.log(sumArray(input2))
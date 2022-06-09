
function countPrimes(n){
    if(n===0 || n===1) return 0
    if(n===2) return 1
    counter =0
    for(i=2; i<=n; i++){
        for(j=2;j<=i;j++){
            if(i%j==0 && i!=j) break
            if(i==j) counter++
        }
    }
    return counter
}
console.log(countPrimes(100))
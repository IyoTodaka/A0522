function swapValue(a,b){
    if(a > b){
        b = a - b
        a = a - b
        b = a + b
    }else if (b > a){
        a = b - a
        b = b - a
        a = b + a
    }
    return [a,b]
}

console.log(swapValue(8,2));
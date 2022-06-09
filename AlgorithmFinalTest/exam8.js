function getMultiplicationTable(x,y){
    let printStr =""
    for(let i=1; i <= x; i++){
        if(i==1) printStr= 'x'
        printStr = printStr + `\t[${i}]`
    }
    
    for(let j=1; j<=y ; j++){
        printStr = printStr + `\n`
        for(let k = 1; k<=x; k++){
            if(k===1) printStr = printStr + `[${j}]`
            printStr = printStr + `\t${j*k}`
        }
    }

    return printStr
}
console.log(getMultiplicationTable(10,10))
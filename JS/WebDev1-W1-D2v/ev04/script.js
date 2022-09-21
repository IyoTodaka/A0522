const colors = ['red','orange', 'yellow','green','blue','indigo','violet'] 

const changeColor = function(e){
    console.log(e);
    const h1 = document.querySelector('h1')
    h1.style.color = this.style.backgroundColor
}

const container = document.querySelector('#boxes')

for(let color of colors){
    const box = document.createElement('div')
    box.style.backgroundColor = color
    box.classList.add('box')
    container.appendChild(box)

    box.addEventListener('click', changeColor)
}

document.body.addEventListener('keypress', function(e){
    console.log(e);
})




/// input
const input = document.querySelector('#username')

input.addEventListener('keydown', function(e){
    // console.log("KEY DOWN");
})
input.addEventListener('keyup', function(e){
    // console.log("KEY UP");
})
input.addEventListener('keypress', function(e){
    console.log("KEY PRESS");
})

const addItemInput = document.querySelector('#addItem')
const itemUL = document.querySelector('#items')

console.log(addItemInput)

addItemInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){

        if(!this.value) return
        const newItem = document.createElement('li')
        const inputValue = this.value

        newItem.innerHTML = inputValue
        itemUL.appendChild(newItem)
        this.value = ""
    }
})
//solution goes here....

const el = document.querySelector('#add-input')
const btn = document.querySelector('#add-btn')
const ultag=document.querySelector('#list')

const pencil = document.createElement('i')
pencil.classList.add('fa')
pencil.classList.add('fa-pencil-square-o')
const times = document.createElement('i')
times.classList.add('fa')
times.classList.add('fa-times')




const clickEvent = function(e) {
    
    const ptag1 = document.createElement('p')
    const txt =el.value
    ptag1.innerHTML=txt

    const litag = document.createElement('li')
    litag.appendChild(ptag1)
    
    const ptag2 = document.createElement('p')
    ptag2.appendChild(pencil)
    ptag2.appendChild(times)
    litag.appendChild(ptag2)

    ultag.appendChild(litag)
    el.value=""
    
    e.preventDefault()

}


btn.addEventListener('click',clickEvent);
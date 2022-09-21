const btn = document.querySelector('button')

btn.addEventListener("mouseover", function(){
    console.log('OIIIII')
})
btn.addEventListener("click", function(){
    alert("SECOND CLICK!!!")
})
btn.addEventListener("click", function(){
    btn.innerText = "STOP CLICKING ME!!!"
})
btn.addEventListener("click", function(){
    btn.style.backgroundColor = 'red'
})

window.addEventListener('scroll', function(){
    console.log('STOP SCROLLING!@!!!!!W!@$@$^#&$')
})

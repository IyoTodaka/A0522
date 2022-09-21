const form = document.querySelector('#signup-form')
const creditCardInput = document.querySelector('#cc')

form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('cc: ', creditCardInput.value);
})
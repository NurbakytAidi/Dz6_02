
// ДЗ 1
const buttons = document.querySelectorAll('.btn')
buttons.forEach(button => {
    button.addEventListener('click',function (){
        console.log('вы нажали на кнопку')
    })

})
// ДЗ 2
let counter = 0;

let inputCounter = document.querySelector('#labelCounter');
let incrementButton = document.querySelector('#incrementButton');
let decrementButton = document.querySelector('#decrementButton');

incrementButton.addEventListener('click', function() {
    counter++;
    inputCounter.innerHTML = counter.toString();
});
decrementButton.addEventListener('click', function() {
    counter--;
    inputCounter.innerHTML = counter.toString();
});










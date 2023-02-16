let output = [];


//Operations
const add = function(...nums) {
    function sum(total, num){
      return total + num;
    }
    return nums.reduce(sum);
};
  
const subtract = function(...nums) {
      function net(total, num){
      return total - num;
    }
    return nums.reduce(net);
};
  
const multiply = function(...nums) {
    function product(total,num){
      return total * num;
    }
    return nums.reduce(product)
};

const divide = function(...nums) {
    function total(total, num){
      return total / num;
    }
    return nums.reduce(total)
};


//Screen display
const screen = document.querySelector(".screen");
screen.textContent = 0;

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    output = []
    screen.textContent = 0;
    return console.log(output.join(""))
})


//Keypad event assignment
const zero = document.querySelector('#zero')
zero.addEventListener('click',() => {
    output.push(0)
    screen.textContent = output.join("");
    console.log(output.join(""));
})

const one = document.querySelector('#one')
one.addEventListener('click',() => {
    output.push(1)
    screen.textContent = output.join("");
    console.log(output.join(""));
})

const two = document.querySelector('#two')
two.addEventListener('click',() => {
    output.push(2)
    screen.textContent = output.join("");
    console.log(output.join(""));
})

const three = document.querySelector('#three')
three.addEventListener('click',() => {
    output.push(3)
    screen.textContent = output.join("");
    console.log(output.join(""));
})

const four = document.querySelector('#four')
four.addEventListener('click',() => {
    output.push(4)
    screen.textContent = output.join("");
    console.log(output.join(""));
})

const five = document.querySelector('#five')
five.addEventListener('click',() => {
    output.push(5)
    screen.textContent = output.join("");
    console.log(output.join(""));
})

const six = document.querySelector('#six')
six.addEventListener('click',() => {
    output.push(6)
    screen.textContent = output.join("");
    console.log(output.join(""));
})

const seven = document.querySelector('#seven')
seven.addEventListener('click',() => {
    output.push(7)
    screen.textContent = output.join("");
    console.log(output.join(""));
})

const eight = document.querySelector('#eight')
eight.addEventListener('click',() => {
    output.push(8)
    screen.textContent = output.join("");
    console.log(output.join(""));
})

const nine = document.querySelector('#nine')
nine.addEventListener('click',() => {
    output.push(9)
    screen.textContent = output.join("");
    console.log(output.join(""));
})

const decimal = document.querySelector('#decimal')

decimal.addEventListener('click',() => {
        if (!output.includes('.')){
            output.push('.');
            screen.textContent = output.join("");
            console.log(output.join(""));
        }
})




//Button styling
const buttons = document.querySelectorAll(".button");
buttons.forEach(button =>{
    button.addEventListener('mouseup',(e) => e.target.style.removeProperty('background'))
})
buttons.forEach(button =>{
    button.addEventListener('mousedown',(e) => e.target.style.background = 'lightcoral')
})
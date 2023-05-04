// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа

const userNum = prompt("Please, enter a number:")
console.log(`10% from ${userNum} is ${userNum/10}.`)


//Написать программу, которая получает два числа и выводит наименьшее

const num1 = prompt("Please, enter your first number:")
const num2 = prompt("Please, enter your second number:")

if (num1 > num2) {
    console.log(`${num2} less than the other number.`)
} else {
    console.log(`${num1} less than the other number.`)
}
if (num1 == num2) {
console.log(`Your two numbers are equal.`)
}


//Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

const numb = prompt("Please, enter your number:")
if (numb > 100) {
    console.log(`Your number is over one hundred.`)
} else {
    console.log(`Your number is less than one hundred.`)
}
if (numb == 100){
    console.log(`Your number is equal to one hundred`)
}


//Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.

const name = prompt("Please, enter your name: ")
const age = prompt("Please, enter your age:")

if (age >= 18) {
    console.log(`Hello, ${name}.`)
} else{
    console.log(`Hi, ${name}.`)
}
    



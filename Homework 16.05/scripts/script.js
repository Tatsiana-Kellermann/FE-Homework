// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

const pElems = []
for (let i = 100; i >= 50; i-= 10) {
    const pElem = document.createElement("p")
    pElem.innerText = i
    const numbersElem = document.querySelector(".numbers")
    numbersElem.append(pElem)
}


// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

const words = ['Linux', 'Frontend', 'Backend', 'QA', 'IT']
const divStrings = document.querySelector(".strings_container")
for (let i = 0; i < words.length; i++) {
    const pElem = document.createElement("p")
    pElem.innerText = words[i]
    divStrings.append(pElem)    
}


// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.


const users = [{
         first_name: 'Ivan',
         last_name:'Ivanov',
         age: 17
     },
     {
         first_name: 'Irina',
         last_name:'Sidorova',
         age: 18
     },
     { 
         first_name: 'Marina',
         last_name:'Petrova',
         age: 12
     },
     {
         first_name: 'Ruslan',
         last_name:'Cherkasov',
         age: 40
     },
     {
         first_name: 'Alena',
         last_name:'Kozlova',
         age: 5
     },
     {
        first_name: 'Elena',
        last_name: 'Gagarina',
        age: 28
     }
    ]

     const usersElem = document.querySelector(".users_container")
     for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            const {first_name, last_name, age} = users[i]

            const pFirst_name = document.createElement("p")
            pFirst_name.innerText = `First name: ${first_name}`

            const pLast_name = document.createElement("p")
            pLast_name.innerText = `Last name: ${last_name}` 

            const pAge = document.createElement("p")
            pAge.innerText = `Age: ${age}`

            const divElem = document.createElement("div")
            divElem.append(pFirst_name, pLast_name, pAge)
            usersElem.append(divElem)
        }
     }
   
        

            
    
        
     

     










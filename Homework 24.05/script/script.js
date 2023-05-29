// Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.
const userFirstNameInp = document.querySelector(".user-firstName")
const userLastNameInp = document.querySelector(".user-lastName")
const userAgeInp = document.querySelector(".user-age")
const userForm = document.querySelector("#user-form")
const usersContainer = document.querySelector(".users-container")

userForm.addEventListener("submit", function(event){
        event.preventDefault()
        console.log(userFirstNameInp.value)
        console.log(userLastNameInp.value)
        console.log(userAgeInp.value);
    })

    // Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.

    const users = []
userForm.addEventListener("submit", function(event){
    event.preventDefault()
    const user = {
        FirstName: userFirstNameInp.value,
        LastName: userLastNameInp.value,
        Age: userAgeInp.value
    }
    userForm.reset() 
    users.push(user)
    console.log(users)
})

// Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.

function createUserNode(FirstName, LastName, Age){
    const pFirstNameElem = document.createElement("p")
    const pLastNameElem = document.createElement("p")
    const pAgeElem = document.createElement("p")
    pFirstNameElem.innerText = FirstName
    pLastNameElem.innerText = LastName
    pAgeElem.innerText = Age
    const divUserElem = document.createElement("div")
    divUserElem.classList.add("user-item")
    divUserElem.append(pFirstNameElem,pLastNameElem, pAgeElem)

    return divUserElem
}

// Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.

function rerender(){
    usersContainer.innerHTML = ""
for (let i = 0; i < users.length; i++) {
    const {FirstName, LastName, Age}= users[i];
    const userCard = createUserNode(FirstName, LastName, Age)
    userCard.addEventListener("dblclick", function(){
        users.splice(i, 1)
        rerender()
    })
    usersContainer.append(userCard)
    }
}
userForm.addEventListener("submit", function(event){
event.preventDefault()
const user = {
    FirstName: userFirstNameInp.value,
    LastName: userLastNameInp.value,
    Age: userAgeInp.value
}
users.push(user)
rerender()
userForm.reset()
})
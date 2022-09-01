let firstScreen = document.getElementById('first-screen')
let secondScreen = document.getElementById('second-screen')
let thirdScreen = document.querySelector('.lot')
let regActive = document.querySelectorAll('.reg-page h4')
let signUpInput = document.querySelector('.sign-up-input')
let getStarted = document.querySelector('#second-screen button')

let change = 0
setInterval(() => {
    change++
    if(change == 30) {
        firstScreen.classList.add("hide")
        secondScreen.classList.remove("d-none")
    }
    if(change == 40) {
        firstScreen.classList.add("d-none")
        secondScreen.classList.remove("hide")
    }
}, 100)

// screen 3
regActive.forEach(function(item) {
    item.addEventListener('click', function() {
        regActive.forEach(function(nav) {
            nav.classList.remove('reg-active')
        })
        this.classList.add('reg-active')
        
    })
})

getStarted.addEventListener('click', function(){
    secondScreen.classList.add('hide')
    secondScreen.classList.add('d-none')
    thirdScreen.classList.remove('d-none')
    thirdScreen.classList.remove('hide') 
})


let menuNav = document.querySelectorAll("nav ul li")

// console.log(menuNav)
menuNav.forEach(function(nav) {
    nav.addEventListener('click', function() {
        menuNav.forEach(function(navmenu) {
            navmenu.classList.remove('active')
        })
        this.classList.add('active')
    })
})

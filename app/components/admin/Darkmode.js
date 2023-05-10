let toggleDark = document.querySelector('#toggleDark')
let moon = document.querySelector('#moon')
let sun = document.querySelector('#sun')
let menu = document.querySelector('#menu')
let sidebar = document.querySelector('#sidebar')
let html = document.querySelector('html')
let changeLang = document.querySelector('#lang')

moon.style.display = 'none'

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    moon.style.display = 'block'
    sun.style.display = 'none'
} else {
    document.documentElement.classList.remove('dark')
}

toggleDark.addEventListener('click', function () {
    if (localStorage.theme == undefined || localStorage.theme == "light") {
        localStorage.theme = 'dark'
    } else {
        localStorage.theme = 'light'
    }

    location.reload()

})

if(localStorage.lang == undefined || localStorage.lang == "rtl"){
    document.documentElement.dir = "rtl"
} else {
    document.documentElement.dir = "ltr"
}

changeLang.addEventListener('click', function () {
    if (localStorage.lang == "rtl") {
        document.documentElement.dir = "ltr"
        localStorage.lang = "ltr"
    } else {
        document.documentElement.dir = "rtl"
        localStorage.lang = "rtl"
    }
})


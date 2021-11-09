let hamburger = document.querySelector('#hamburger')
let navlinks = document.querySelector('#navlinks')

let line = hamburger.querySelector('#line')
let line2 = hamburger.querySelector('#line2')

hamburger.addEventListener('click', function (){
    if (navlinks.classList.contains('hidden')){
        navlinks.classList.remove('hidden')
        line.classList.add('rotate-45', 'absolute')
        line2.classList.add('-rotate-45', 'absolute')
        line2.classList.remove('mt-1.5')
    } else{
        navlinks.classList.add('hidden')
        line.classList.remove('rotate-45', 'absolute')
        line2.classList.remove('-rotate-45', 'absolute')
        line2.classList.add('mt-1.5')
    }
})
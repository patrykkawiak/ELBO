const nav = document.querySelector('nav')
const navDesktop = document.querySelector('.nav-desktop')
const burger = document.querySelector('.nav-mobile-burger')
const mobileLinks = document.querySelectorAll('.nav-mobile-list .nav-list-item a')
const navListShadow = document.querySelector('.nav-mobile-list-shadow')

const toggleScrolledClass = () => {
  if(window.scrollY > 0 || window.innerWidth < 768) {
    nav.classList.add('scrolled')
  }
  else {
    nav.classList.remove('scrolled')
  }
}

const toggleNav = () => {
  let isExpanded = burger.getAttribute('aria-expanded')
  if (isExpanded == 'false'){
    isExpanded = false
  }
  else {
    isExpanded = true
  }
  burger.setAttribute('aria-expanded', !isExpanded)
}

const hideNav = () => {
  burger.setAttribute('aria-expanded', false)
}

window.addEventListener('DOMContentLoaded', () => {
  toggleScrolledClass()
  setTimeout(() => {
    navDesktop.classList.add('loaded')
  }, 100)

})
window.addEventListener('scroll', toggleScrolledClass)
burger.addEventListener('click', toggleNav)
navListShadow.addEventListener('click', hideNav)
mobileLinks.forEach(link => {
  link.addEventListener('click', hideNav)
})

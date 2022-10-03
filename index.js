console.log('HELLO WORLD!')

const burger = document.querySelector('[data-burger]')
const nav = document.querySelector('[data-nav]')
const body = document.body
const banner = document.querySelector('[data-wrapper')
const navItems = nav.querySelectorAll('a')

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll')
  burger?.classList.toggle('header__burger--active')
  nav.classList.toggle('header__nav--visible')
  banner.classList.toggle('banner__wrapper--neactive')
})

navItems.forEach(item => [
  item.addEventListener('click', () => {
    body.classList.remove('stop-scroll')
    burger?.classList.remove('header__burger--active')
    nav.classList.remove('header__nav--visible')
    banner.classList.remove('banner__wrapper--neactive')
  }),
])

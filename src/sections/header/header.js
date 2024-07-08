const header = () => {
   
  const headerNav = document.getElementById('header')
  const navToggle = document.getElementById('nav-toggle')
  const navClose = document.getElementById('nav-close')
  const navMenu = document.querySelector('.nav__menu')
  const body = document.querySelector('body')
  const navLinks = document.querySelectorAll('.nav__link')
  const container = document.querySelector('.header .container')

  /*===== MENU BURGER =====*/
  //open/close

  const closeMenu = () => {
    navToggle.style.display = ''
    navClose.style.display = 'none'
    headerNav.style.height = ''
    headerNav.style.overflowY = 'hidden'
    navMenu.style.transform = ''
    body.style.overflowY = ''
    container.style.overflowY = ''
  }

  navToggle.addEventListener('click', () => {
    navToggle.style.display = 'none'
    navClose.style.display = 'block'
    headerNav.style.height = '100%'
    headerNav.style.overflowY = 'scroll'
    navMenu.style.transform = 'translate(-50%, 25%)'
    body.style.overflowY = 'hidden'
    container.style.overflowY = 'auto'
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu)
    })
  })

  navClose.addEventListener('click', closeMenu)

    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
  //get all sections with an id
  const sections = document.querySelectorAll("section[id]")

  //add an eventlistener listening for scroll
  window.addEventListener("scroll", navHighlighter)

  function navHighlighter () {
    //get current scroll position
    let scrollY = window.scrollY
    //loop through the sections to get height, top and Id values
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50
      const sectionId = current.getAttribute("id")
      //if our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link on sidebar, else remove it
      //to know which link needs an active class we use sectionId
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
      } else {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
      }
    })
  }
  /*=============== SHOW SCROLL UP ===============*/
  // const navItems = document.querySelectorAll(".nav__item")

  // navItems.forEach(item => {
  //   item.addEventListener('click', () => {
  //     navMenu.classList.remove('show-sidebar')
  //   })
  // })
}

export default header
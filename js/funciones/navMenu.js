export function navMenu () {
    const mobileNav = document.querySelector('.mobile__nav')
    const navMenu = document.querySelector('.nav__menu')
    const navClose = document.querySelector('.btn__close ')
    const navLink = document.querySelectorAll('.nav__item')

    mobileNav.addEventListener('click', function () {
        navMenu.classList.toggle('show__menu')
    })

    navClose.addEventListener('click', function (){
        navMenu.classList.remove('show__menu')
    })

    function linkClick () {
        const navMenu = document.querySelector('.nav__menu')
        navMenu.classList.remove('show__menu')
      }
     navLink.forEach(x => {
        x.addEventListener('click', linkClick)
     }); 

     const home = document.querySelector('.home')
     const boutMr = document.querySelector('.about__me')
     const ability = document.querySelector('.my__abilities')
     const exp = document.querySelector('.experience')
     const portf = document.querySelector('.portafolio')
     const contact = document.querySelector('.contact')

     const btnHome = document.querySelector('.btn__home')
     const btnBoutMe = document.querySelector('.btn__bout__me')
     const btnAbility = document.querySelector('.btn__ability')
     const btnExp = document.querySelector('.btn__exp')
     const btnPortf = document.querySelector('.btn__portf')
     const btnContact = document.querySelector('.btn__contact')

     btnHome.addEventListener('click', function(){
        home.scrollIntoView()
     })

     btnBoutMe.addEventListener('click', function(){
        boutMr.scrollIntoView()
     })

     btnAbility.addEventListener('click', function(){
        ability.scrollIntoView()
     })

     btnExp.addEventListener('click', function(){
        exp.scrollIntoView()
     })

     btnPortf.addEventListener('click', function(){
        portf.scrollIntoView()
     })

     btnContact.addEventListener('click', function(){
        contact.scrollIntoView()
     })




}


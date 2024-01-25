/* Show Menu */

const navMenu = document.getElementById('nav__menu');
const navToggle = document.getElementById('nav__toggle');
const navClose = document.getElementById('nav__close')

if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}


//when we click on each link - remove show-menu

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav__menu');
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


//Change background header

const blurHeader = () => {
  const header = document.getElementById('header');
  //when the scroll is greater than 50 vh add the blur-header class
  this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)
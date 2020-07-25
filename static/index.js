windows.onload = function (){getElementById('preloader').style.display = 'none';}

// getting all the elements

const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuBranding = document.querySelector('.menu-branding')
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.nav-item')

// adding the event listener

let showBtn = false;

menuBtn.addEventListener('click', toggleFunc)

// toggle function 

function toggleFunc(){
    if (!showBtn){
        menuBtn.classList.add('close')
        menu.classList.add('show')
        menuBranding.classList.add('show')
        menuNav.classList.add('show')
        navItems.forEach(item => item.classList.add('show'))

       showBtn = true;
    }
    else{
           menuBtn.classList.remove('close')
           menu.classList.remove('show')
           menuBranding.classList.remove('show')
           menuNav.classList.remove('show')
           navItems.forEach(item => item.classList.remove('show'))

           showBtn = false;
    }
}
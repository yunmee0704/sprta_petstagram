/*!
* Start Bootstrap - Freelancer v7.0.4 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var slides=document.querySelector('.slides'),
    slide= document.querySelectorAll('.slides li'),
    currentIdx=0,
    slideCount=slide.length,
    prevBtn=document.querySelector('.prev'),
    slideWidth=330,
    slideMargin=30,
    nextBtn=document.querySelector('.next');

    slides.style.width=    (slideWidth+slideMargin)*slideCount-slideMargin +'px';

function moveSlide(num){
  slides.style.left=-num*340+'px';
  currentIdx=num;
}
nextBtn.addEventListener('click',function(){
  if(currentIdx < slideCount-3){
  moveSlide(currentIdx+1);
  console.log(currentIdx);
}else{
  moveSlide(0);
}
});
prevBtn.addEventListener('click',function(){
  if(currentIdx > 0){
  moveSlide(currentIdx-1);
  console.log(currentIdx-3);
}else{
  moveSlide(0);
}
});

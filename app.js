const menu = document.querySelector('#mobile-menu');
const menuLinks= document.querySelector('.navbar__menu');
const body = document.querySelector('body')

//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);

// Close mobile menu when clicking on a menu item
const hideMobileMenu = () =>{
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 1000 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);

const highlightMenu = () => {
    const homeMenu = document.querySelector('#home-page');
    const workMenu = document.querySelector('#work-page');
    const aboutMenu = document.querySelector('#about-page');
    let scrollPos = window.scrollY;

    //adds highlight class to my menu items
    if (window.innerWidth < 1000){
        workMenu.classList.remove('highlight'); 
        homeMenu.classList.remove('highlight'); 
        aboutMenu.classList.remove('highlight');
        return;
    }
    else if(window.innerWidth > 1000 && scrollPos < 700){   //dont want it to work when hamburger menu and to swith every 600px
        homeMenu.classList.add('highlight');
        workMenu.classList.remove('highlight');  //remove it from the previous
        return;
    }
    else if(window.innerWidth > 1000 && scrollPos < 1400){ //only about menu has highlight
        workMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    else if(window.innerWidth > 1000 && scrollPos < 1450){ //only about menu has highlight
        aboutMenu.classList.add('highlight');
        workMenu.classList.remove('highlight');
        return;
    }

}
 
window.addEventListener('DOMContentLoaded',highlightMenu);  
window.addEventListener('scroll',highlightMenu);
window.addEventListener('click',highlightMenu);


// Get all the icon elements
const icons = document.querySelectorAll('.icon');

// Add click event listener to each icon element
icons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Get the corresponding link from the parent element
    const link = icon.parentNode.querySelector('.text').getAttribute('href');
    // window.open(link, '_blank'); // Open the link in a new tab
    window.location.href = link;
  });
});


// Get the span element
const spanElement = document.querySelector('.hero__heading span');
// Add a click event listener to the span element
spanElement.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior
});





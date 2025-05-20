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
    const bookingMenu = document.querySelector("#booking-page");
    let scrollPos = window.scrollY;

    //adds highlight class to my menu items
    if (window.innerWidth < 1000){
        workMenu.classList.remove('highlight'); 
        homeMenu.classList.remove('highlight'); 
        aboutMenu.classList.remove('highlight');
        bookingMenu.classList.remove('highlight');
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
    else if(window.innerWidth > 1000 && scrollPos < 2200){ //only about menu has highlight
        aboutMenu.classList.add('highlight');
        workMenu.classList.remove('highlight');
        bookingMenu.classList.remove("highlight");
        return;
    }
    else if (window.innerWidth > 1000 ) {
      bookingMenu.classList.add("highlight");
      aboutMenu.classList.remove("highlight");
      return;
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(".navbar__links");

  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth > 1000) {
        // Remove highlight from all
        menuLinks.forEach((l) => l.classList.remove("highlight"));
        // Highlight the clicked one
        e.target.classList.add("highlight");
      }
    });
  });
});

 
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


const spanElement = document.querySelector('.hero__heading');
spanElement.addEventListener('transitionend', function(event) {  //'selectstart'
    spanElement.style.outline = 'none'; // Remove the outline after the pulsate animation
    event.preventDefault();
    event.stopPropagation();
});
  


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const bookingSection = document.getElementById("booking");  
  const message = document.getElementById("form-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // prevent the redirect

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwpozzoo", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
          form.reset(); // clear form
          console.log("Form submitted successfully");
          bookingSection.style.display = "none";
          message.style.display = "block"; // show thank you message
      } else {
        message.textContent = "Oops! Something went wrong. Please try again.";
        message.style.display = "block";
        message.style.color = "red";
      }
    } catch (error) {
      console.error("Form submission error:", error);
      message.textContent = "Network error. Please try again later.";
      message.style.display = "block";
      message.style.color = "red";
    }
  });
});






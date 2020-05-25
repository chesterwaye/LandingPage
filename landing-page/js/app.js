/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navMenu = document.getElementById('navbar_list');

const sec = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBar = () => {
    let navs = '';
    
    sec.forEach(section => {
        const sectionId = section.id;
        const secData = section.dataset.nav;

        navs += '<li><a class="menu__link" href="#${sectionId}">${secData}</a></li>';
    });
    
    navMenu.innerHTML = navs;
};

navBar();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// Add class 'active' to section when it is near top of viewport

// Make sections active

// Build a global variable

/* const navbarMenu = document.getElementById('navbar_list');

function narbarMenu() {

    var sections = document.getElementsByTagName('SECTION');

    let i;

    for (i = 0; i < sections.length; i++) {

        nodeName = sections[i].getAttribute('data-nav');

        link = sections[i].textContent;

    }

    var node = document.createElement('LI');

    var a = document.createElement('A');

    a.appendChild(nodeName);

    a.appendChild(link);

    node.appendChild(a);

    node.setAttribute('style', '.navbar_menu');

    navbarMenu.appendChild(node);

}

document.body.appendChild(navbarMenu);

navbarMenu.setAttribute('style', '.menu_link');

}

navbarMeny();
document.addEventListener("scroll", function () {
    makeActive();
});

function makeActive() {
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        // You can play with the values in the "if" condition to further make it more accurate. 
        if (box.top <= 150 && box.bottom >= 150) {
            // Apply active state on the current section and the corresponding Nav link.
        } else {
            // Remove active state from other section and corresponding Nav link.
        }
    }
}
 */
// Grab elements
// declaring a function expression
const selectElement = selector => { // arrow function
    // define a new variable called element
    const element = document.querySelector(selector);
    // add some validation
    if(element) return element;
    // if the element is not found, throw an error
    throw new Error(`Something went wrong, make sure that "${selector}" exists or is typed correctly!`);
};

// console.log(selectElement('.navbar')); // is working
// console.log(selectElement('.footer')); /*Something went wrong, make sure that ".footer" exists or is typed correctly!*/
// console.log(selectElement('#header')); // is working
const scrollHeader = () => 
{
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15) 
    {
        headerElement.classList.add('activated');
        console.log('scrolled 15px or more'); 
        console.log(header.classList.contains("activated"));
    } else { 
        headerElement.classList.remove('activated');
    }
};

    // attach an event listener
    // https://youtu.be/Aj7HLsJenVg?t=2428
window.addEventListener('scroll', scrollHeader);
//Nav styles on scroll

// Open menu & search pop-up
// https://youtu.be/Aj7HLsJenVg?t=2481
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => 
{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);
// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage
// https://youtu.be/Aj7HLsJenVg?t=2626
// const bodyElement = 
// Swiper
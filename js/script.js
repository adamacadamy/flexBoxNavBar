//var toggleMenu = function(){

// }

// let toggleMenu = () => {

// }
/**
 * DOM - Document Object Model
 *  - document - representa d documento HTML
 *  - object - representa o objeto
 *  - model - representa m modelo
 * 
 *  toggle means - alternate [on/off]
 * 
 */
function toggleMenu(){
    /**
     *  list [nav]  with its style and html elements
     */
    const navLinks = document.querySelector('.nav-links');
    const displayStyle = navLinks.style.display;

    // if(displayStyle === 'flex'){
    //     navLinks.style.display = 'none';
    // }
    // else{
    //     navLinks.style.display = 'flex';
    // }
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';

}

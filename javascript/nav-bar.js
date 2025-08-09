let links = document.querySelectorAll('.sidebar-link');

let homeSidebar = document.querySelector('.js-sidebar');
let navBarExpanded = false;

document.body.addEventListener('click', () => {
    if(navBarExpanded){
        navBarExpanded = false;
        homeSidebar.style.display = 'none';
    }
});

let menu = document.querySelector('.js-menu');
menu.addEventListener('click', (event) => {
    navBarExpanded = true;
    homeSidebar.style.display = 'flex';
    event.stopPropagation();
});

links.forEach(link => {
    link.addEventListener('click', () => {
           homeSidebar.style.display = 'none';
    })
    navBarExpanded = false;
});
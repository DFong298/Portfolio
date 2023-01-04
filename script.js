let _name = document.getElementById('name');
let about = document.getElementById('about-wrapper');
let portrait = document.getElementById('portrait');
let background = document.getElementById('background');
//let links = document.getElementById('links')

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    _name.style.top = value * 0.75 + 'px';
    background.style.top = value * 0.75 + 'px';
    about.style.top = value * 1 + 'px';
    portrait.style.top = value * 1 + 'px';
    //links.style.top = value * 1.2 + 'px'
})


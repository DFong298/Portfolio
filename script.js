let portrait = document.getElementById('portrait');
let foreground = document.getElementById('foreground');
let background = document.getElementById('background');
let lighting = document.getElementById('lighting');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    portrait.style.marginTop = value * 3 + 'px';
    background.style.top = value * 0.75 + 'px'
})


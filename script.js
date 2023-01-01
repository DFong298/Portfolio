let text = document.getElementById('text');
let foreground = document.getElementById('foreground');
let background = document.getElementById('background');
let lighting = document.getElementById('lighting');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 3 + 'px';
})

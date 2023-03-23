let text = document.getElementById('text');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let leaf = document.getElementById('leaf');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (value < '500') {
        text.style.marginTop = value * 1.5 + 'px';
        leaf.style.top = value * -0.5 + 'px';
        leaf.style.left = value * 0.5 + 'px';
        hill5.style.left = value * 0.5 + 'px';
        hill4.style.left = value * -0.5 + 'px';
        hill1.style.top = value * 1 + 'px';
    }

});
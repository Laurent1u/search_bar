const body      = document.getElementsByTagName('body')[0];
const searchBtn = document.getElementById('search-btn');
const search    = document.getElementById('search');
const tip       = document.getElementById('tip');

var i = 0;
var message = 'Men Who Love Weirdos';
var speed = 100;

body.addEventListener('click', (e) => {
    if(searchBtn.contains(e.target)) {
        search.style.width = '80%';
        search.style.paddingLeft = '60px';
        search.style.cursor = 'text';
        search.focus();
        typeWriter();
    } else {
        search.setAttribute('placeholder', '');
        i = 0;
        search.style.width = '';
        search.style.paddingLeft = '';
        search.style.cursor = 'pointer';
    }
    
});

search.addEventListener('keydown', () => {
    tip.style.visibility = 'visible';
    tip.style.opacity = '1';
});

function typeWriter() {
    if (i < message.length) {
        msg = search.getAttribute('placeholder') + message.charAt(i);
        search.setAttribute('placeholder', msg);
        i++;
        setTimeout(typeWriter, speed);
    }
}
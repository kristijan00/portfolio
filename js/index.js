let aTagsInNav = document.querySelectorAll('nav a');
let liTagsinNav = document.querySelectorAll('nav li');
let navBar = document.querySelector('.navBar');
document.querySelector('nav').addEventListener('click', function (event) {
    setTimeout(function () {
        let route = location.href.substring(27);
        addClass(route);
    }, 40);
});

let sections = document.querySelectorAll('.section')
window.onscroll = () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
            console.log(current);
        }
    });
    addClass(current);
};

var myCarousel = document.querySelector('#work-carousel');
var carousel = new bootstrap.Carousel(myCarousel);

function addClass(route) {
    if (route == 'about' || route == 'work') {
        navBar.classList.add('change');
    } else {
        navBar.classList.remove('change');
    }
    for (let liTag of liTagsinNav) {
        liTag.classList.remove('active');
    }
    for (let aTag of aTagsInNav) {
        aTag.classList.remove('active');
        let href = aTag.getAttribute('href');

        if (href === "#" + route) {
            aTag.classList.add('active');
            aTag.parentElement.closest('li').classList.add('active');
        }
    }
}
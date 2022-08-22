let aTagsInNav = document.querySelectorAll('nav a'),
    liTagsinNav = document.querySelectorAll('nav li'),
    navBar = document.querySelector('.navBar'),
    aboutWrapper = document.querySelector('.aboutWrapper'),
    workWrapper = document.querySelector('.workWrapper'),
    contactWrapper = document.querySelector('.contactWrapper'),
    sections = document.querySelectorAll('.section');

document.querySelector('nav').addEventListener('click', function () {
    setTimeout(function () {
        let route = location.href.substring(27);
        addClass(route);
    }, 40);
});

window.onscroll = () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute("id");
        }
    });
    addClass(current);
};

function addClass(route) {
    if (route == 'about' || route == 'work') {
        navBar.classList.add('change');
    } else {
        navBar.classList.remove('change');
    }
    for (let liTag of liTagsinNav) {
        liTag.classList.remove('active');
        let href = liTag.children[0].getAttribute('href');
        if (href === "#" + route) {
            liTag.classList.add('active');
            if (aboutWrapper.id == route) {
                aboutWrapper.classList.add('active');
            } else {
                aboutWrapper.classList.remove('active');
            }
            if (workWrapper.id == route) {
                workWrapper.classList.add('active');
            } else {
                workWrapper.classList.remove('active');
            }
            if (contactWrapper.id == route) {
                contactWrapper.classList.add('active');
            } else {
                contactWrapper.classList.remove('active');
            }
        }
    }
}
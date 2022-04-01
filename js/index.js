document.querySelector('nav').addEventListener('click', function (event) {
    setTimeout(function () {
        let route = location.href.substring(27);
        let aTagsInNav = document.querySelectorAll('nav a');
        console.log(route);
        for (let aTag of aTagsInNav) {
            aTag.classList.remove('active');
            let href = aTag.getAttribute('href');
            if (href === route) {
                aTag.classList.add('active');
            }
        }
    }, 30);
});

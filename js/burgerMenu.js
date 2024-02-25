document.addEventListener('DOMContentLoaded', function () {
    let burgerButton = document.getElementById('burgerButton');
    let menu = document.getElementById('menu');
    let cross = document.querySelector('.cross'); 

    burgerButton.addEventListener('click', function () {
        menu.classList.toggle('menu--open');
    });

    document.addEventListener('click', function (event) {
        var isClickInsideMenu = menu.contains(event.target) || burgerButton.contains(event.target);

        if (!isClickInsideMenu) {
            menu.classList.remove('menu--open');
        }
    });

    
    window.addEventListener('scroll', function () {
        menu.classList.remove('menu--open');
    });

    
    cross.addEventListener('click', function () {
        menu.classList.remove('menu--open');
    });
});


// headerScroll();

function headerScroll() {
    let $topHeader = $('.header');
    let scrollClass = 'header--scroll';

    checkHeaderPosition();

    function checkHeaderPosition() {

        if ($(window).scrollTop() > 0) {
            $topHeader.addClass(scrollClass);
        } else {
            $topHeader.removeClass(scrollClass);
        }

        requestAnimationFrame(checkHeaderPosition);
    }
}

// function headerHeight() {
//     let headerHeight = document.querySelector('.header').offsetHeight,
//         body = document.querySelector('body');
//     body.style.paddingTop = headerHeight + "px";
// }
// headerHeight();


let catalogMenuName = 'headerMenu';

window.catalogMenu = new menu(
    {
        name: catalogMenuName,
        button: '.header__mobile-button, .header__bottom-mobile-header-button',
        buttonActiveClass: 'active',
        menuBlock: '.header__bottom-wrapper',
        menuActiveClass: 'active',
    }
);


function subMenu() {
    let headerMenuList = $('.header__menu li');
    headerMenuList.each(function(index, item) {
        $(item).hover(()=> {
            if($(item).find('.header__sub-wrapper')) {
                console.log($(item).find('.header__sub-menu').outerHeight())
                $(item).find('.header__sub-wrapper').slideToggle()
            }
        })
    });
}
subMenu();

headerScroll();

function headerScroll() {
    let $topHeader = $('.header');
    let scrollClass = 'header--scroll';

    let lastScrollTop = 0;
    $(window).scroll(function(event){
        let st = $(this).scrollTop();


        if (st > lastScrollTop){
            $topHeader.removeClass(scrollClass);
        } else {
            $topHeader.addClass(scrollClass);
        }

        if ($(this).scrollTop() >= 120) {
            $topHeader.addClass('header--hide');
        }
        else {
            $topHeader.removeClass('header--hide');
            $topHeader.removeClass(scrollClass);
        }

        lastScrollTop = st;
    });

    // checkHeaderPosition();

    function checkHeaderPosition() {
        let st = $(this).scrollTop();
        if (st > lastScrollTop){
            $topHeader.removeClass(scrollClass);
        } else {
            $topHeader.addClass(scrollClass);
        }
        lastScrollTop = st;

        requestAnimationFrame(checkHeaderPosition);
    }
}


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
    if(headerMenuList.find('.header__sub-wrapper').length){
        headerMenuList.each(function(index, item) {
            $(item).hover(()=> {
                hoverElem($(item));
                // $(item).find('.header__sub-wrapper').slideToggle()
            })
        });
    }
    function hoverElem(element) {
        let hoverNow = false;
        if(!hoverNow) {
            element.find('.header__sub-wrapper').slideToggle(270)
            hoverNow = true;
        }

    }
}
subMenu();

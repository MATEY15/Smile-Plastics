headerScroll();

function headerScroll() {
    let $topHeader = $('.header');
    let scrollClass = 'header--scroll';

    let lastScrollTop = 0;
    $(window).scroll(function (event) {
        let st = $(this).scrollTop();


        if (st > lastScrollTop) {
            $topHeader.removeClass(scrollClass);
        } else {
            $topHeader.addClass(scrollClass);
        }

        if ($(this).scrollTop() >= 120) {
            $topHeader.addClass('header--hide');
        } else {
            $topHeader.removeClass('header--hide');
            $topHeader.removeClass(scrollClass);
        }

        lastScrollTop = st;
    });

    // checkHeaderPosition();

    function checkHeaderPosition() {
        let st = $(this).scrollTop();
        if (st > lastScrollTop) {
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
    let headerMenuList = $('.menu > li');
    let heightList = [];
    let heightSubMenu;
    if (headerMenuList.find('.sub-menu').length) {
        headerMenuList.each(function (index, item) {

            heightList.push($(item).find('.sub-menu').height())

            if ($(item).find('.sub-menu').length) {
                heightSubMenu = $(item).find('.sub-menu').height();
                $(item).find('.sub-menu').height(0)
                $(item).find('.sub-menu').css({"position": "absolute"})
            }

            $(item).hover(function () {
                    if ($(item).find('.sub-menu').length) {
                        $('.menu').css({"padding-bottom": heightList[index]})
                        $(item).find('.sub-menu').height(heightList[index])
                    }
                },
                function () {
                    if ($(item).find('.sub-menu').length) {
                        $(item).find('.sub-menu').height(0)
                        $('.menu').css({"padding-bottom": 0})
                    }
                }
            )

        });
    }
}

subMenu();

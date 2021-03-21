function mobileMenu() {

    let $burgerButton = document.querySelector('.burger-menu');
    let burgerButtonActive = 'burger-menu--active';
    let $wrapperMenu = document.querySelector('.header__menu');
    let wrapperMenuActive = 'header__menu--active';

    $burgerButton.addEventListener('click', () => {
        $burgerButton.classList.toggle(burgerButtonActive);
        $wrapperMenu.classList.toggle(wrapperMenuActive)
    });
}
mobileMenu();
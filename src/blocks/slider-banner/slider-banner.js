require('slick-carousel');

let sliderProduct = function(){
    $('.slider-banner').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 7000,
        appendArrows: ".slider-banner__navigate",
        prevArrow: '<div class="slider-banner__nav slider-banner__nav--prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="42" viewBox="0 0 18 42"><g fill="none" fill-rule="evenodd" stroke="#413C2D" stroke-width="1.5"><path d="M1520 40L1504 20 1520 0" transform="translate(-1543 -483) translate(40 484) matrix(-1 0 0 1 3024 0)"/></g> </svg> </div>',
        nextArrow: '<div class="slider-banner__nav slider-banner__nav--next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="42" viewBox="0 0 18 42"><g fill="none" fill-rule="evenodd" stroke="#413C2D" stroke-width="1.5"><path d="M1520 40L1504 20 1520 0" transform="translate(-1543 -483) translate(40 484) matrix(-1 0 0 1 3024 0)"/></g> </svg> </div>',
        fade: true,
        cssEase: 'linear',
    });
};

sliderProduct();
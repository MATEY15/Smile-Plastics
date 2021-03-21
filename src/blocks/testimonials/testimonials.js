require('slick-carousel');

let sliderTestimonials = function(){
    $('.testimonials__counter-all').html(" of "+$('.testimonials .testimonials__item').length);

    $('.testimonials').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        appendArrows: ".testimonials__navigate",
        prevArrow: '<div class="testimonials__nav testimonials__nav--prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="42" viewBox="0 0 18 42"><g fill="none" fill-rule="evenodd" stroke="#413C2D" stroke-width="1.5"><path d="M1520 40L1504 20 1520 0" transform="translate(-1543 -483) translate(40 484) matrix(-1 0 0 1 3024 0)"/></g> </svg> </div>',
        nextArrow: '<div class="testimonials__nav testimonials__nav--next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="42" viewBox="0 0 18 42"><g fill="none" fill-rule="evenodd" stroke="#413C2D" stroke-width="1.5"><path d="M1520 40L1504 20 1520 0" transform="translate(-1543 -483) translate(40 484) matrix(-1 0 0 1 3024 0)"/></g> </svg> </div>',
    });
    $('.testimonials').on('init reInit beforeChange', function (event, slick, currentSlide, nextSlide) {
        let i = (nextSlide ? nextSlide : 0) + 1;
        // i = ('0' + i).slice(-2);
        $('.testimonials__counter-int').html(i);
    });
};

sliderTestimonials();
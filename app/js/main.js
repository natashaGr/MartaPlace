$(function () {
    $('.header__profile-name').on('click', function () {
        $('.dropdowm-profile').slideToggle();
    });

    $('.product-slider__inner').slick({
        appendArrows: '.product-slider__arrows',
        prevArrow: '<button type="button" class="slick-arrows arrows-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><path fill="#000000" d="M14 20c0.128 0 0.256-0.049 0.354-0.146 0.195-0.195 0.195-0.512 0-0.707l-8.646-8.646 8.646-8.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-9 9c-0.195 0.195-0.195 0.512 0 0.707l9 9c0.098 0.098 0.226 0.146 0.354 0.146z"></path></svg></button>',
        nextArrow: '<button type="button" class="slick-arrows arrows-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><path fill="#000000" d="M5 20c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l8.646-8.646-8.646-8.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l9 9c0.195 0.195 0.195 0.512 0 0.707l-9 9c-0.098 0.098-0.226 0.146-0.354 0.146z"></path></svg></button>',
    });

    $('.rate-star').rateYo({
        starWidth: "18px",
        starHeigh: "18px",
        ratedFill: "#ffc000",
        normalFill: "#eff1f5",
        readOnly: true,
        rating: 4.6,
        "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>',
 
    });

$('.followers-slider__inner').slick({
    slidesToShow: 3,
    variableWidth: true,
    appendArrows: '.followers-slider__arrows',
    prevArrow: '<button type="button" class="slick-arrows arrows-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><path fill="#000000" d="M14 20c0.128 0 0.256-0.049 0.354-0.146 0.195-0.195 0.195-0.512 0-0.707l-8.646-8.646 8.646-8.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-9 9c-0.195 0.195-0.195 0.512 0 0.707l9 9c0.098 0.098 0.226 0.146 0.354 0.146z"></path></svg></button>',
    nextArrow: '<button type="button" class="slick-arrows arrows-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><path fill="#000000" d="M5 20c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l8.646-8.646-8.646-8.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l9 9c0.195 0.195 0.195 0.512 0 0.707l-9 9c-0.098 0.098-0.226 0.146-0.354 0.146z"></path></svg></button>',
});

$('.feedback__inner').slick({
    slidesToShow: 2,
    infinite: false,
    prevArrow: '<button type="button" class="slick-arrows arrows-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><path fill="#000000" d="M14 20c0.128 0 0.256-0.049 0.354-0.146 0.195-0.195 0.195-0.512 0-0.707l-8.646-8.646 8.646-8.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-9 9c-0.195 0.195-0.195 0.512 0 0.707l9 9c0.098 0.098 0.226 0.146 0.354 0.146z"></path></svg></button>',
    nextArrow: '<button type="button" class="slick-arrows arrows-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><path fill="#000000" d="M5 20c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l8.646-8.646-8.646-8.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l9 9c0.195 0.195 0.195 0.512 0 0.707l-9 9c-0.098 0.098-0.226 0.146-0.354 0.146z"></path></svg></button>',
    variableWidth: true,
});

$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 340,
    from: 30,
    to: 300,
    step: 0,
    prefix: "$"
});

$('.filter-bar__icon--grid').on('click', function () {
    $('.product-page__card').removeClass('list');
    $('.product-page__box').removeClass('list');
    $('.filter-bar__icon--grid').addClass('filter-bar__icon--active');
    $('.filter-bar__icon--list').removeClass('filter-bar__icon--active');
});
$('.filter-bar__icon--list').on('click', function () {
    $('.product-page__box').addClass('list');
    $('.product-page__card').addClass('list');
    $('.filter-bar__icon--list').addClass('filter-bar__icon--active');
    $('.filter-bar__icon--grid').removeClass('filter-bar__icon--active');
});

});

$(function () {
    var mixer = mixitup('.product__inner');
});
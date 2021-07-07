$(function () {

    $('.product-slider__inner').slick({
        appendArrows: '.product-slider__arrows',
        prevArrow: '<button type="button" class="slick-arrows arrows-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><path fill="#000000" d="M14 20c0.128 0 0.256-0.049 0.354-0.146 0.195-0.195 0.195-0.512 0-0.707l-8.646-8.646 8.646-8.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-9 9c-0.195 0.195-0.195 0.512 0 0.707l9 9c0.098 0.098 0.226 0.146 0.354 0.146z"></path></svg></button>',
        nextArrow: '<button type="button" class="slick-arrows arrows-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><path fill="#000000" d="M5 20c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l8.646-8.646-8.646-8.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l9 9c0.195 0.195 0.195 0.512 0 0.707l-9 9c-0.098 0.098-0.226 0.146-0.354 0.146z"></path></svg></button>',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    variableWidth: false,
                }
            }
        ]
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
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    appendDots: '.dots',
                    variableWidth: true,
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.feedback__inner').slick({
        slidesToShow: 2,
        prevArrow: '<button type="button" class="slick-arrows arrows-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><path fill="#000000" d="M14 20c0.128 0 0.256-0.049 0.354-0.146 0.195-0.195 0.195-0.512 0-0.707l-8.646-8.646 8.646-8.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-9 9c-0.195 0.195-0.195 0.512 0 0.707l9 9c0.098 0.098 0.226 0.146 0.354 0.146z"></path></svg></button>',
        nextArrow: '<button type="button" class="slick-arrows arrows-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><path fill="#000000" d="M5 20c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l8.646-8.646-8.646-8.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l9 9c0.195 0.195 0.195 0.512 0 0.707l-9 9c-0.098 0.098-0.226 0.146-0.354 0.146z"></path></svg></button>',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    appendDots: '.feedback__dots',
                    slidesToShow: 1,
                    variableWidth: false,
                    adaptiveHeight: true,
                }
            }
        ]
    });

    $('.header__user').on('click', function () {
        $('.header__profile-menu').slideToggle();
    });

    $('.header__dropdown-slogan--martplace').on('click', function () {
        $('.header__dropdown-item--martplace').slideToggle();
    });
    $('.header__dropdown-slogan--dashboard').on('click', function () {
        $('.header__dropdown-box--dashboard').slideToggle();
    });
    $('.header__dropdown-title--other').on('click', function () {
        $('.header__dropdown-box--other').slideToggle();
    });


    var $range = $(".product-grid__form-slider"),
        $inputFrom = $(".product-grid__form-price--from"),
        $inputTo = $(".product-grid__form-price--to"),
        instance,
        min = 0,
        max = 400,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: 320,
        from: 30,
        to: 300,
        hide_min_max: true,
        hide_from_to: true,

        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");
    function updateInputs(data) {
        from = data.from;
        to = data.to;
        $inputFrom.prop("value", '$' + from);
        $inputTo.prop("value", '$' + to);
    }

    $inputFrom.on("input", function () {
        var val = $(this).prop("value");
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });

    $('.filter-bar__icon--grid').on('click', function () {
        $('.product-grid__card').removeClass('list');
        $('.filter-bar__icon--grid').addClass('filter-bar__icon--active');
        $('.filter-bar__icon--list').removeClass('filter-bar__icon--active');
    });

    $('.filter-bar__icon--list').on('click', function () {
        $('.product-grid__card').addClass('list');
        $('.filter-bar__icon--list').addClass('filter-bar__icon--active');
        $('.filter-bar__icon--grid').removeClass('filter-bar__icon--active');
    });

    $('.filter-bar__icon--grid').on('click', function () {
        $('.product__cart').removeClass('list');
        $('.filter-bar__icon--grid').addClass('filter-bar__icon--active');
        $('.filter-bar__icon--list').removeClass('filter-bar__icon--active');
    });

    $('.filter-bar__icon--list').on('click', function () {
        $('.product__cart').addClass('list');
        $('.filter-bar__icon--list').addClass('filter-bar__icon--active');
        $('.filter-bar__icon--grid').removeClass('filter-bar__icon--active');
    });

    $('.header__burger').click(function () {
        $(this).toggleClass('open');
        $('.header__menu-item').slideToggle();
    });

    $('.product-grid__title--categories').click(function () {
        $(this).toggleClass('list');
        $('.product-grid__list').slideToggle();
    });

    $('.product-grid__title--checkbox').click(function () {
        $(this).toggleClass('list');
        $('.product-grid__form').slideToggle();
    });

    $('.product-grid__title--range').click(function () {
        $(this).toggleClass('list');
        $('.product-grid__range').slideToggle();
    });

    $('.product-grid__filter-btn').click(function () {
        $('.product-grid__filter-box').slideToggle();
    });

    $('.blog-page__filter').click(function () {
        $('.blog-page__box').slideToggle();
    });

    $(window).scroll(function () {
        $('.animate__animated').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 250) {
                $(this).addClass('animate__fadeInLeftBig');
            }
        });

        $('.text, .how-works__img--gray').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 250) {
                $(this).addClass('animate__fadeInRightBig');
            }
        });
    });

    $('.fun-fact').viewportChecker({
        callbackFunction: function (elem, action) {
            $('.fun-fact__card-number--yellow').animateNumber({ number: 38900 }, 10000);
            $('.fun-fact__card-number--blue').animateNumber({ number: 3736 }, 10000);
            $('.fun-fact__card-number--green').animateNumber({ number: 2736 }, 5000);
            $('.fun-fact__card-number--red').animateNumber({ number: 25736 }, 5000);
        },
    });




});

$(function () {
    $('.single-product__tab .single-product__info').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.single-product__tab').find('.single-product__tab-wrapper').removeClass('active-tab').hide();
        $('.single-product__tab .single-product__tabs').find('.single-product__info').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    var mixer = mixitup('.product__inner');
});



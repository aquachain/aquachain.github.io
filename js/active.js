(function ($) {
    'use strict';

    // :: 1.0 Owl Carousel Active JS
    if ($.fn.owlCarousel) {
        $(".welcome_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: true,
            navText: ["<i class='pe-7s-angle-left'</i>", "<i class='pe-7s-angle-right'</i>"]
        });

        $(".products_slides").owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            margin: 30,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 4
                }
            }
        });

        $(".testimonials_slider").owlCarousel({
            items: 2,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            margin: 50,
            center: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        $(".left-side-menu-tes-slides").owlCarousel({
            items: 2,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            margin: 50,
            center: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });

        $(".partners-slides").owlCarousel({
            items: 6,
            loop: true,
            autoplay: true,
            smartSpeed: 500,
            margin: 30,
            center: true,
            dots: false,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                },
                992: {
                    items: 6
                }
            }
        });
    }

    // :: 2.0 Color Picker Active Code
    $(".select_opt").on('click', function () {
        var getId = $(this).attr('value');
        $('body').removeClass('blue default light-green deep-green orange deep-orange red pink purple cyan teal amber').addClass(getId);
    });
    $(".color_picker_switcher").on('click', function () {
        $(".color_picker_area").toggleClass('off');
    })

    // :: 3.0 Theme Variations Active Code
    $(".theme-option").on('click', function () {
        var getId = $(this).attr('Id');
        $('body').removeClass('dark-version').addClass(getId);
    });

    // :: 4.0 ScrollUp Active JS
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // :: 5.0 onePageNav Active JS
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 1500,
            easing: 'easeOutQuad'
        });
    }

    // :: 6.0 Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('.video_btn, .video_button').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
        $('.gallery_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade',
            preloader: true
        });
    }

    // :: 8.0 Jarallax Active JS
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // :: 9.0 Countdown Active Code
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $(this).find(".years").html(event.strftime("%Y"));
            $(this).find(".days").html(event.strftime("%D"));
            $(this).find(".hours").html(event.strftime("%H"));
            $(this).find(".minutes").html(event.strftime("%M"));
            $(this).find(".seconds").html(event.strftime("%S"));
        });
    });

    // :: 10.0 matchHeight Active JS
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    var $window = $(window);
    // :: 11.0 Wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    // :: 12.0 Left Side Menu Active Code
    $('.left-arrow-btn').on('click', function () {
        $('body').toggleClass('left-side-menu-close');
    });

    // :: 13.0 Sticky Active JS
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('.header_area').addClass('sticky');
        } else {
            $('.header_area').removeClass('sticky');
        }
    });

    // :: 14.0 PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 15.0 Preloader active code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);
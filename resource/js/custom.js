// Menu Responsive
$('.menu-icon').click(function() {
    $('.menu-icon').toggleClass('rm');
    $('nav').toggleClass('rm');
});

// Menu Close
$('nav a').click(function() {
    $('.menu-icon').removeClass('rm');
    $('nav').removeClass('rm');
});

// Navlink Active
function navlink_active() {
    let position = $(window).scrollTop();

    $('section').each(function() {
        let target = $(this).offset().top;
        let id = $(this).attr('id');

        if (position >= (target - 200)) {
            $('nav a').removeClass('active');
            $('nav a[href="#' + id + '"]').addClass('active');
        }
    });
}

// Header Fixed
let header = $('header');
let headerHeight = header.outerHeight();

$('a[href*="#"]:not([href="#"])').click(function(event) {
    let href = $(this).attr('href');
    let targetPos = $(href).offset().top - headerHeight;

    $('html, body').animate({
        scrollTop: targetPos
    }, 400);

    event.preventDefault();
});

// Header Sticky
function header_sticky() {
    if ($(window).scrollTop() > 100) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
}

// Animated Headline
$(function() {
    $('.prof-selector').animatedHeadline({
        animationType: 'type'
    });
});

// Wow
new WOW().init();

// Counter-Up
$(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
});

if ($('.skill-bar').length) {
    $('.skill-inner').appear(function() {
        const el = $(this);
        const percent = el.data('width');
        $(el).css('width', percent+'%');
    }, {accY: 0});
}

// Splide
new Splide('.splide').mount();

// Owl Carousel
$('.owl-carousel').owlCarousel({
    dots: true,
    loop: true,
    slideSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
        0: {
            items: 1
        }
    }
});

// ===== Initial Load =====
navlink_active();
header_sticky();

// ===== Window Scroll Event =====
$(window).scroll(function() {
    navlink_active();
    header_sticky();
});
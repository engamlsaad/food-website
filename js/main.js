$('.owl-carousel').owlCarousel({
    loop:true,
    smartSpeed: 500,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

(function ($) {
    "use strick";

    // wow js
    new Wow().init();
})(jquery);
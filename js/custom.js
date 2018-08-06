$(function () {

    // animate on scroll
    new WOW().init();
});

$(document).ready(function () {
    $("#grad-pics").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            }
        }
    });
});

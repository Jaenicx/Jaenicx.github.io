$(function () {

    // animate on scroll
    new WOW().init();
});

$(document).ready(function () {
    $('.slide-section').click(function (e) {

        var linkhref = $(this).attr('href');

        $("html, body").animate({
            scrollTop: $(linkhref).offset().top
        });

        e.preventDefault();
    });

});

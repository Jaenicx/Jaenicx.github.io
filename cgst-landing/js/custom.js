$(function () {

    // animate on scroll
    new WOW().init();
});

$(".theology").hover(function () {
        $(".landing").css({
            "WebkitTransition": "background-image 0.5s ease-in-out",
            "MozTransition": "background-image 0.5s ease-in-out",
            "MsTransition": "background-image 0.5s ease-in-out",
            "OTransition": "background-image 0.5s ease-in-out",
            "backgroundImage": "url(theo.jpg)"

        });
    },
    function () {
        $(".landing").css({
            "transition": "background-image 0.5s ease-in-out",
            "backgroundImage": "url(landing.jpg)"
        });
    });


$(".psychology").hover(function () {
        $(".landing").css({
            "transition": "background-image 0.5s ease-in-out",
            "backgroundImage": "url(psychology.jpg)"
        });
    },
    function () {
        $(".landing").css({
            "transition": "background-image 0.5s ease-in-out",
            "backgroundImage": "url(landing.jpg)"
        });
    });


$(".business").hover(function () {
        $(".landing").css({
            "transition": "background-image 0.5s ease-in-out",
            "backgroundImage": "url(business.jpg)"
        });
    },
    function () {
        $(".landing").css({
            "transition": "background-image 0.5s ease-in-out",
            "backgroundImage": "url(landing.jpg)"
        });
    });

$("path, circle").hover(function (e) {
    $('#info-box').css('display', 'block');
    $('#info-box').html($(this).data('info'));
});

$("path, circle").mouseleave(function (e) {
    $('#info-box').css('display', 'none');
});

$(document).mousemove(function (e) {
    $('#info-box').css('top', e.pageY - $('#info-box').height() - 30);
    $('#info-box').css('left', e.pageX - ($('#info-box').width()) / 2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (ios) {
    $('a').on('click touchend', function () {
        var link = $(this).attr('href');
        window.open(link, '_blank');
        return false;
    });
}

$(document).ready(function () {

    $("#stcatherine").click(function () {
        $(".parish-cath").slideToggle("slow");

        $('html, body').animate({
            scrollTop: $("#stcatherine-s").offset().top + $("#stcatherine-s")[0].scrollHeight

        }, 2000)
    })
})

$(document).ready(function () {

    $("#portland").click(function () {
        $(".parish-portland").slideToggle("slow");

        $('html, body').animate({
            scrollTop: $(".parish-portland").offset().top + $(".parish-portland")[0].scrollHeight

        }, 2000)
    })
})

$(document).ready(function () {

    $("#stmary").click(function () {
        $(".parish-mary").slideToggle("slow");

        $('html, body').animate({
            scrollTop: $(".parish-mary").offset().top + $(".parish-mary")[0].scrollHeight

        }, 2000)
    })
})

$(document).ready(function () {

    $("#stthomas").click(function () {
        $(".parish-thomas").slideToggle("slow");

        $('html, body').animate({
            scrollTop: $(".parish-thomas").offset().top + $(".parish-thomas")[0].scrollHeight

        }, 2000)
    })
})

$(document).ready(function () {

    $("#manchester").click(function () {
        $(".parish-manchester").slideToggle("slow");

        $('html, body').animate({
            scrollTop: $(".parish-manchester").offset().top + $(".parish-manchester")[0].scrollHeight

        }, 2000)
    })
})

$(document).ready(function () {

    $("#stann").click(function () {
        $(".parish-ann").slideToggle("slow");

        $('html, body').animate({
            scrollTop: $(".parish-ann").offset().top + $(".parish-ann")[0].scrollHeight

        }, 2000)
    })
})

$(document).ready(function () {

    $("#kingston").click(function () {
        $(".parish-kingston").slideToggle("slow");

        $('html, body').animate({
            scrollTop: $(".parish-kingston").offset().top + $(".parish-kingston")[0].scrollHeight

        }, 2000)
    })
})

$(document).ready(function () {

    $("#stelizabeth").click(function () {
        $(".parish-liz").slideToggle("slow");

        $('html, body').animate({
            scrollTop: $(".parish-liz").offset().top + $(".parish-liz")[0].scrollHeight

        }, 2000)
    })
})


$(document).ready(function () {

    $("#westmoreland").click(function () {
        $(".parish-west").slideToggle("slow");

        $('html, body').animate({
            scrollTop: $(".parish-west").offset().top + $(".parish-west")[0].scrollHeight

        }, 2000)
    })
})

$(document).ready(function () {

    $("#stjames").click(function () {
        $(".parish-james").slideToggle("slow");

        $('html, body').animate({
            scrollTop: $(".parish-james").offset().top + $(".parish-james")[0].scrollHeight

        }, 2000)
    })
})

$(document).ready(function () {

    $("#trelawny").click(function () {
        $(".parish-trelawny").slideToggle("slow");

        $('html, body').animate({
            scrollTop: $(".parish-trelawny").offset().top + $(".parish-trelawny")[0].scrollHeight

        }, 2000)
    })
})

$(document).ready(function () {

    $("#hanover").click(function () {
        $(".parish-hanover").slideToggle("slow");

        $('html, body').animate({
            scrollTop: $(".parish-hanover").offset().top + $(".parish-hanover")[0].scrollHeight

        }, 2000)
    })
})

$(document).ready(function () {

    $("#clarendon").click(function () {
        $(".parish-clarendon").slideToggle("slow");

        $('html, body').animate({
            scrollTop: $(".parish-clarendon").offset().top + $(".parish-clarendon")[0].scrollHeight

        }, 2000)
    })
})

$(document).ready(function () {

    $("#standrew").click(function () {
        $(".parish-kingston").slideToggle("slow");

        $('html, body').animate({
            scrollTop: $(".parish-kingston").offset().top + $(".parish-kingston")[0].scrollHeight

        }, 2000)
    })
})

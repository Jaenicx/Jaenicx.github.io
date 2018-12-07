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

var myVideo = document.getElementById("vid1");
var vids = ["../player/vid/vid1.mp4","../player/vid/vid2.mp4","../player/vid/vid3.mp4", "../player/vid/You say Run.mp3", "../player/vid/Bombing King.mp3", "../player/vid/Jet Set Run.mp3"];
 var vidIndex = 1;

 var playRotate = anime({
    targets: '.playVid',
    rotate: '1turn',
    delay: function(el, i, l) { return i * 100; },
    direction: 'alternate',
    autoplay: false,
    duration: 1000
  });

  var pauseRotate = anime({
    targets: '.pauseVid',
    rotate: '1turn',
    delay: function(el, i, l) { return i * 100; },
    direction: 'alternate',
    autoplay: false,
  });

  var prevRotate = anime({
    targets: '.prevVid',
    rotate: '1turn',
    delay: function(el, i, l) { return i * 100; },
    direction: 'alternate',
    autoplay: false,
    duration: 1000
  });

  var nextRotate = anime({
    targets: '.nextVid',
    rotate: '1turn',
    delay: function(el, i, l) { return i * 100; },
    direction: 'alternate',
    autoplay: false,
    duration: 1000
  });

  var stopRotate = anime({
    targets: '.stopVid',
    rotate: '1turn',
    delay: function(el, i, l) { return i * 100; },
    direction: 'alternate',
    autoplay: false,
    duration: 1000
  });

 
document.querySelector('.playVid').onmouseover = playRotate.play;
document.querySelector('.pauseVid').onmouseover = pauseRotate.play;
document.querySelector('.nextVid').onmouseover = nextRotate.play;
document.querySelector('.prevVid').onmouseover = prevRotate.play;
document.querySelector('.stopVid').onmouseover = stopRotate.play;




function playVideo() {
    if (myVideo.paused) 
        myVideo.play();  
        
} 


function pauseVideo(){
    if (myVideo.play)
    myVideo.pause();
        
}

function nextVideo(){
    myVideo.setAttribute("src", vids[vidIndex]);
    vidIndex++;
    if(vidIndex>5){
        vidIndex=5;
    }
    
}

function prevVideo(){
    myVideo.setAttribute("src", vids[vidIndex]);
    vidIndex--;
    if(vidIndex<0){
        vidIndex=0;
    }
    
}

function stopVideo(){
        myVideo.pause(); 
        myVideo.currentTime=0;
}



  


  /*
    $(".btn-next").click(
        function () {
        $("#vid1").css({
            "display": "none"
        });
    },
         function () {
        $("#vid2").css({
            "display": "block"
        });
    });

    $(".btn-previ").click(
        function () {
        $("#vid1").css({
            "display": "none"
        });
    },
         function () {
        $("#vid2").css({
            "display": "block"
        });
    });
    */


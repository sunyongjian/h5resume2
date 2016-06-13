/**
 * Created by Administrator on 2016/6/10.
 */

(function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";

})(640);
function fixPagesHeight() {
    $('.swiper-slide,.swiper-container').css({
        height: $(window).height(),
        width:$(window).width()
    })
}
$(window).on('resize', function () {
    fixPagesHeight();
});
fixPagesHeight();


var step = 0;
var arrow=document.querySelector(".arrow");
var mySwiper = new Swiper('.swiper-container', {
    direction: "vertical",
    loop: true,
    onSlidePrevEnd: function () {
        step--;
        change();
        if(step==5){
            arrow.style.webkitAnimationDuration="1.5s";
        }
        if (step == 0) {
            arrow.style.webkitAnimationDuration="0s";
            step = 6;
        }
    },
    onSlideNextEnd: function () {
        step++;
        change();
        if(step == 6){
            arrow.style.webkitAnimationDuration="0s";
        }
        if (step == 7) {
            arrow.style.webkitAnimationDuration="1.5s";
            step = 1;
        }
    }
});

function change() {
    divs = document.querySelectorAll(".swiper-slide");
    [].forEach.call(divs, function (curDiv, index) {
        curDiv.id = index == step ? curDiv.getAttribute("trueId") : null;
    })
}

~function () {
    var audioBox = document.querySelector(".audio"),
        myAudio = audioBox.getElementsByTagName("audio")[0];
    window.setTimeout(function () {
        myAudio.play();
        myAudio.addEventListener("canplay", function () {
            audioBox.style.display = "block";
            audioBox.className += " audioMove";
        }, false);
    }, 1000);
    audioBox.addEventListener("click", function () {
        if (myAudio.paused) {
            myAudio.play();
            audioBox.className = "audio audioMove";
            return;
        }
        myAudio.pause();
        audioBox.className = "audio";
    }, false);
}();

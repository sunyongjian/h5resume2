/**
 * Created by Administrator on 2016/6/10.
 */

(function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";

})(640);

var step = 0;
var arrow=document.querySelector(".arrow");
console.log(arrow)
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

    //->延时播放音频文件,先让其他的内容加载
    window.setTimeout(function () {
        myAudio.play();
        myAudio.addEventListener("canplay", function () {
            //->当音频可以播放的时候触发这个事件
            audioBox.style.display = "block";
            audioBox.className += " audioMove";
        }, false);
    }, 1000);

    //->点击音乐图标,实现音频的暂停或者播放
    audioBox.addEventListener("click", function () {
        if (myAudio.paused) {//->当前是暂停的,我让其播放
            myAudio.play();
            audioBox.className = "audio audioMove";
            return;
        }
        //->当前是播放的,我让其暂停
        myAudio.pause();
        audioBox.className = "audio";
    }, false);
}();

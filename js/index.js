/**
 * Created by Administrator on 2016/6/10.
 */

(function (desW) {
    var winW=document.documentElement.clientWidth;
    document.documentElement.style.fontSize=winW/desW*100+"px";

})(640);


var step=0;
    var mySwiper=new Swiper('.swiper-container',{
        direction :"vertical",
        loop:true,
        onSlidePrevEnd:function () {
            step--;
            change();
            if(step==0){
                step=6;
            }

        },
        onSlideNextEnd:function () {
            step++;
            change();
            if(step==7){
                step=1;
            }
        }
    });

function change() {
    divs=document.querySelectorAll(".swiper-slide");

    [].forEach.call(divs,function (curDiv,index) {
        console.log(index);
        curDiv.id=index==step?curDiv.getAttribute("trueId"):null;
    })
}



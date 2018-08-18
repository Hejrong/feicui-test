// 微信上播放
function musicInWeixinHandler() {   

musicPlay(true);   

document.addEventListener("WeixinJSBridgeReady", function () {   

musicPlay(true);   

}, false);   

document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);   

}   

document.addEventListener('DOMContentLoaded', musicInWeixinHandler);   

}   

function musicPlay(isPlay) {   

var media = document.getElementById('video1');   

if (isPlay && media.paused) {   

media.play();   

}   

if (!isPlay && !media.paused) {   

media.pause();   

}   

}  
// 点击图片跳二维码
	var img = $('.con ul li .img'),
		title = $('.con ul li .title'),
		tiaozhuan = document.getElementsByClassName('tiaozhuan')[0],
		gb = $('.tiaozhaun .ew .gb span'),
		len1 = title.length,
		len2 = img.length;
		$('.con ul li ').find('.title').on('click', function(){
           $('#tiaozhuan').addClass("tz");
        });
        $('.con ul li ').find('.img').on('click', function(){
           $('#tiaozhuan').addClass("tz");
        });
        $('#gb').on('click', function(){
        	$('#tiaozhuan').removeClass("tz");
        })

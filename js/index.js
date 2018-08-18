//点击播放视频
var myVideo=document.getElementById("video1"),
            video1 = document.getElementById('play'),
            play = document.getElementsByClassName('play')[0],
            play1 = document.getElementsByClassName('play')[1],
            n = 0,
            n1 = 0;
        myVideo.onclick=function(){
            n++;
            if(n % 2 == 1){
                this.play();
                play.style.display='none';
            }else{
                this.pause();
                play.style.display='inline-block';
            }
            myVideo.loop=true;
        }
        video1.onclick=function(){
            n1++;
            if(n1 % 2 == 1){
                this.play();
                play1.style.display='none';
            }else{
                this.pause();
                play1.style.display='inline-block';
            }
            this.loop=true;
        }
// 点击图片跳二维码
	var img = $('.con ul li .img'),
		title = $('.con ul li .title'),
		tiaozhuan = document.getElementsByClassName('tiaozhuan')[0],
		gb = $('.tiaozhaun .ew .gb span'),
		len1 = title.length,
		len2 = img.length;
		// for (var i = 0; i <= len1; i++) {
		// 	title[i].onclick=function(){tiaozhuan.classList.add("tz");}
		// }
		// for(var i = 0; i <= len2; i++){
		// 	title[i].onclick=function(){tiaozhuan.classList.add("tz");}
		// }
		// gb.on('click', function(){
		// 	tiaozhuan.classList.remove("tz");
		// });
		$('.con ul li ').find('.title').on('click', function(){
           $('#tiaozhuan').addClass("tz");
        });
        $('.con ul li ').find('.img').on('click', function(){
           $('#tiaozhuan').addClass("tz");
        });
        $('#gb').on('click', function(){
        	$('#tiaozhuan').removeClass("tz");
        })

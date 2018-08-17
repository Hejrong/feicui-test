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

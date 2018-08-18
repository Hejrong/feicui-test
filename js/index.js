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

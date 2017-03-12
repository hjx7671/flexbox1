//设置屏幕高度
total = document.documentElement.clientHeight;
//colHeight = total-100-document.getElementById("col1").offsetTop;
colHeight = total-5;
document.getElementById("f11").style.height=colHeight+"px";


//	音乐
	$(".music").click(function(){
        if($(".icon-music").attr("num") == "1"){
            $(".icon-music").removeClass("open");
            $(".icon-music").attr("num","2");
            $(".music-span").css("display","none");
            document.getElementById("aud").pause();
            $(".music_text").html("关闭");
            $(".music_text").addClass("show_hide");
            setTimeout(musicHide,2000);
        }else{
            $(".icon-music").attr("num","1");
            $(".icon-music").addClass("open");
            $(".music-span").css("display","block");
            document.getElementById("aud").play();
            $(".music_text").html("开启");
            $(".music_text").addClass("show_hide");
            setTimeout(musicHide,2000);
        }
        function musicHide(){
            $(".music_text").removeClass("show_hide");
        }

	  });//	音乐
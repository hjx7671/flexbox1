// 文档结构载入完成后，显示Loading效果




$(function () {
	loading_container = '<div id="loading_container" style="position:absolute;z-index:1000;width:100%;height:100%;padding:0;margin:0;text-align:center;background-color:#ffffff;">';
	loading_container += '<div id="loading_circle">';
	loading_container += '<span id="outer"><span id="inner"></span></span>';
	loading_container += 'Loading';
	loading_container += '<div id="loading_slow">网速有点慢，请继续等待或 <a href="#" id="loading_refresh">重载</a> 网页。</div>';
	loading_container += '</div>';
	loading_container += '</div>';

	$("body").prepend(loading_container);
	setTimeout(function () {
			$("#loading_slow").fadeIn(500)
		},
		500);
	$("#loading_refresh").click(function () {
		location.reload();
		return !1;
	});
});

// 文档元素载入完成后，删除Loading效果
$().ready( function ()  {
	$("#loading_container").fadeOut(500, function () {
		$(this).remove();
//		第一页动画
//		startdelay = 500;
//	coredelay = 4000;
//	maindelay = 8000;
//	setTimeout("$('#ringgroup').addClass('pass');$('#light').addClass('pass');$('#core').addClass('pass');",startdelay);
//	setTimeout("$('#light').addClass('passed');$('#wave').addClass('pass');",startdelay + coredelay);
//	setTimeout("$('body').removeClass('out').addClass('in')", startdelay + coredelay + maindelay);
//		
//		
		
		
		
		
		
mizhu.alert('欢迎来到双力精化', '希望新三原色为您创造效益');

//		alert("我是alert");

	});
});







//alert样式js
var mizhu = new function () {
	this.width = $(window).width() * 0.8;
	this.height = 172;

	this.close = function () {
		$('.win iframe').fadeOut();
		$('.win').fadeOut("fast");
		setTimeout(function () {
			$('.win iframe').remove();
			$('.win').remove();
		}, 200);
	};

	this.open = function (width, height, title, url, closed) {
		this._close = function () {
			this.close();
			if ($.isFunction(closed)) closed();
		};
		var html = '<div class="win"><div class="mask-layer"></div><div class="window-panel"><iframe class="title-panel" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe><div class="title"><h3></h3></div><a href="javascript:void(0)" onclick="mizhu._close();" class="close-btn" title="关闭">×</a><iframe class="body-panel" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" src=""></iframe></div></div>';
		var jq = $(html);
		jq.find(".window-panel").height(mizhu.height).width(mizhu.width).css("margin-left", -mizhu.width / 2).css("margin-top", -mizhu.height);
		jq.find(".title").find(":header").html(title);
		jq.find(".body-panel").height(height - 36).attr("src", url);
		jq.appendTo('body').fadeIn("fast");
		$(".win .window-panel").focus();
	};

	function messageBox(html, title, message, type) {
		var jq = $(html);
		if (type == "toast") {
			jq.find(".window-panel").width(message.length * 20).css("margin-left", -message.length * 20 / 2).css("margin-top", -mizhu.height / 2);
		} else {
			jq.find(".window-panel").width(mizhu.width).css("margin-left", -mizhu.width / 2).css("margin-top", -mizhu.height / 2 - 36);
		}
		if (valempty(title)) {
			jq.find(".title").remove();
			jq.find(".window-panel .body-panel").css("border-radius", "4px");
		} else {
			jq.find(".title").find(":header").html(title);
		}
		jq.find(".content").html(message.replace('\r\n', '<br/>'));
		jq.appendTo('body').fadeIn("fast");
		$(".win .w-btn:first").focus();
	}

	this.confirm = function (title, message, selected) {
		this._close = function (flag) {
			if (flag) {
				$(".win").remove();
				selected(flag);
			} else {
				this.close();
			};
		};

		var html = '<div class="win"><div class="mask-layer"></div><div class="window-panel"><iframe class="title-panel" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe><div class="title"><h3></h3></div><div class="body-panel"><p class="content"></p><p class="btns"><button class="w-btn" tabindex="1" onclick="mizhu._close(false);">取消</button><button class="w-btn" onclick="mizhu._close(true);">确定</button></p></div></div></div>';
		messageBox(html, title, message);
	};

	this.alert = function (title, message, ico) {
		var icon = "";
		if (!valempty(ico)) {
			icon = '<p class="btns" style="margin-bottom:-15px;"><img width="70px" height="70px" src="images/' + ico + '.png"></p>';
		}
		var html = '<div class="win"><div class="mask-layer"></div><div class="window-panel"><iframe class="title-panel" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe><div class="title"><h3></h3></div><div class="body-panel">' + icon + '<p class="content"></p><p class="btns"><button class="w-btn" tabindex="1" onclick="mizhu.close();">确定</button></p></div></div></div>';
		messageBox(html, title, message);
	};

	this.toast = function (message, time) {
		var html = '<div class="win"><div class="window-panel"><iframe class="title-panel" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe><div class="body-panel toast-panel"><p class="content toast-content"></p></div></div></div>';
		messageBox(html, "", message, "toast");
		setTimeout(function () {
			mizhu.close();
		}, time || 3000);
	};
};

function valempty(str) {
	if (str == "null" || str == null || str == "" || str == "undefined" || str == undefined || str == 0) {
		return true;
	} else {
		return false;
	}
}

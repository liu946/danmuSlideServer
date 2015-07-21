//{ "text":"2333333" , "color":"green" ,"size":"1","position":"0","time":60};
// 全局量
var socket = io();// socket.io obj
function initElementSize () {
      if (window.innerWidth)
            winWidth = window.innerWidth;
      else if ((document.body) && (document.body.clientWidth))
            winWidth = document.body.clientWidth;
      // 获取窗口高度
      if (window.innerHeight)
            winHeight = window.innerHeight;
      else if ((document.body) && (document.body.clientHeight))
            winHeight = document.body.clientHeight;
      $("section.ui-placehold-wrap").css("height",winWidth*0.4);
}
// 获取表单数据
function getarray (obj) {
	var arr = {};
	x = obj.serializeArray();
	$.each(x, function(i, field){
      	arr[field.name]=field.value;
    });
    return arr;
}



$(function () {
	initElementSize();
	// form submit updanmu
	$('#submit').click(function(){
		socket.emit('updanmu', getarray($('#form')));
		$('#msgsuccess').fadeIn()
		setTimeout(function  () {
			$('#msgsuccess').fadeOut()
		},2000)
		return false;
	});
	socket.on('broadcastdanmu', function(msg){
		console.log('get danmu'+msg);
	});
	$("#danmu").danmu({
            left: 0,    //区域的起始位置x坐标
            top: 30 ,  //区域的起始位置y坐标
            height: winWidth*0.4, //区域的高度
            width: winWidth, //区域的宽度
            zindex :100, //div的css样式zindex
            speed:20000, //弹幕速度，飞过区域的毫秒数
            sumtime:60*60*10 , //弹幕运行总时间
            default_font_color:"#000000", //弹幕默认字体颜色
            font_size_small:30, //小号弹幕的字体大小,注意此属性值只能是整数
            font_size_big:36, //大号弹幕的字体大小
            opacity:"0.9", //弹幕默认透明度
            top_botton_danmu_time:6000 //顶端底端弹幕持续时间
      });
	$('#danmu').danmu('danmu_start');

	var a_danmu={ "text":"欢迎使用弹幕系统 - by Micheal Liu" , "color":"green" ,"size":"1","position":"0","time":10};

	$('#danmu').danmu("add_danmu",a_danmu);
	// socket io
	socket.on('broadcastdanmu', function(msg){
		console.log('get danmu'+msg);
		msg['time'] = $('#danmu').data("nowtime");
		$('#danmu').danmu("add_danmu",msg);
	});
})
//{ "text":"2333333" , "color":"green" ,"size":"1","position":"0","time":60};
// 全局量
var socket = io();// socket.io obj

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
	// form submit updanmu
	$('#submit').click(function(){
		socket.emit('updanmu', getarray($('#form')));

		return false;
	});
	socket.on('broadcastdanmu', function(msg){
		console.log('get danmu'+msg);
	});
})
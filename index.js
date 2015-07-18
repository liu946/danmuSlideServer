var express = require('express')
var app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);

// config
app.locals.title = 'Danmu Slide Show';
app.locals.email = 'liuyang570926881@gmail.com';
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));

// router
app.get('/', function(req, res){
  res.render('slidelist',{slides:['2015-07-16-example']});
});
app.get('/danmu/:id', function (req, res, next) {
  console.log('Request page [danmu] :', req.params.id);
  res.render('layouts/danmu', { slidefilename: req.params.id});
});
app.get('/slide/:id', function (req, res, next) {
  console.log('Request page [slide] :', req.params.id);
  res.render('pages/'+req.params.id);
});

// socket io
var status = {'onlinenum':0,'danmunum':0}

io.on('connection', function(socket){
  // 上线
  console.log('A user connected: usernum('+(++status['onlinenum'])+') ');
  // 注销
  socket.on('disconnect', function(){
    console.log('A user disconnected: usernum('+(--status['onlinenum'])+') ');
  });
  // 客户端上传弹幕-- 用于发射
  socket.on('updanmu',function(msg) {
  	console.log('A danmu received('+(++status['danmunum'])+'):'+msg);
  	// 弹幕广播
  	socket.emit('broadcastdanmu',msg);

  })
});


// server
var server = http.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
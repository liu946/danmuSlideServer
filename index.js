var express = require('express')
var app = express()

app.locals.title = 'Danmu Slide Show';
app.locals.email = 'liuyang570926881@gmail.com';

app.get('/', function(req, res){
  res.sendFile(__dirname + '/pages/')
});

app.get('/danmu/:id', function (req, res, next) {
  console.log('Request page [danmu] :', req.params.id);
  res.render('layouts/danmu', { slidefilename: req.params.id});
});

app.get('/slide/:id', function (req, res, next) {
  console.log('Request page [slide] :', req.params.id);
  res.render('pages/'+req.params.id);
});
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
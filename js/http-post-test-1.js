var http = require('http');
var htmlget = require('fs').readFileSync('views/index.html');
var htmlpost = require('fs').readFileSync('views/form.html');

http.createServer(function(request, response) {
  //response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

  if(response.method === 'GET') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(htmlget);
  } else if(request.method === 'POST') {

    //ここに処理を記述する
    var data = '';

    request.on('data', function(chunk) {

        postData += chunk;  //todo

    }).on('end', function() {

        //response.end('あなたが送信したのは、' + postData);
        console.log(data);
        response.end(htmlpost);

    })

  }

}).listen(8080);


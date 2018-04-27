var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
    console.log(request.method);
    console.log(request.url);
    request.on('data', function(chunk){
        console.log(chunk.toString());
    })

    response.writeHead(200, {'Content-type' : 'text/html'});

    fs.readFile('index.html', function(err, data){
        console.log(data.toString());
    });
    console.log('After readFile');
    

    /*response.write("<form method='POST' action=''>");
    response.write("Login : <input type='text' name='login' />");
    response.write("Mot de passe : <input type='password' name='password' />");
    response.write("<input type='submit' />");
    response.write('</form');*/
});

server.listen(3000);


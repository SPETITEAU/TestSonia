var express = require('express');

var app = express();

var pageHits = [];

var temps;

/*app.all('*', function(request, response, next){
    pageHits[request.url] = pageHits[request.url]+1 || 1
    console.log(pageHits);
    next();
});*/

app.all('*', function(request, response, next){
    temps=new Date().getTime();
    pageHits[request.url] = pageHits[request.url]+1 || 1
    console.log(pageHits);
    console.log(temps);
    next();
});

app.all('/api/resource/*',function(request, response, next){
    response.end("Route/api/resource");
    next();
});

app.get('/clients/:id/view', function(request, response, next){
    response.end('Page clients, id :'+request.params.id);
    console.log(request.params);
    next();
});

app.get('/clients/:id/view', function(request, response, next){
    console.log("Autre vue");
    next();

});

app.all('*', function(request, response){
    var tmp = new Date().getTime();
    console.log(tmp-temps);
})
app.listen(3000);

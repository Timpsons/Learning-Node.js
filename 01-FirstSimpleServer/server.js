var http = require('http');
var myModule = require('./myModule')

function onRequest(request, response) {
  myModule.log('Entering onRequest()...')
  myModule.createSimpleResponse(response);
}

http.createServer(onRequest).listen(8080);

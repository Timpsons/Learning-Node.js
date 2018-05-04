var url = require('url');
var fs = require('fs');

function createResponseFromFile(path, response) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write('File not found!');
        } else {
            response.write(data);
        }

        response.end();
    });
}

module.exports = {
  handleRequest: function(request, response) {
      response.writeHead(200, {'Content-Type': 'text/html'});

      var path = url.parse(request.url).pathname;
      switch (path) {
          case '/':
              createResponseFromFile('./html/main.html', response);
              break;
          case '/interesting':
              createResponseFromFile('./html/interesting.html', response);
              break;
          default:
              response.writeHead(404);
              createResponseFromFile('./html/error.html', response);
              break;
      }

  }
};

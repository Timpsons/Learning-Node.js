module.exports = {
  createSimpleResponse: function(response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hello world!");
    response.end();
  },

  log: function(message) {
    console.log(message);
  }
}

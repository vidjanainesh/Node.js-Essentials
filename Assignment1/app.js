const http = require('http');

const routes = require('./routes');

// Create http server
const server = http.createServer(routes);

//Server Listening
server.listen(3000);
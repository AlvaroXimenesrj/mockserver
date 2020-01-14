var http = require('http');
var mockserver = require('mockserver');

http.createServer(mockserver('test')).listen(9001);
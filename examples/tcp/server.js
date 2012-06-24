
/**
 * Module dependencies.
 */

var net = require('net'),
    util = require('util');

module.exports = net.createServer(function(stream){
    stream.addListener('data', function(chunk){
        stream.write(chunk);
    });
    stream.addListener('end', function(){
        stream.end();
    });
});
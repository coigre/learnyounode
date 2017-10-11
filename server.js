var net = require('net');
var server = net.createServer(function(socket) { //'connection' listener
    console.log('server connected');
    socket.on('end', function() {
        console.log('server disconnected');
    });
    socket.on('data', function(){
        socket.end(now());
    });
});
server.listen(8124, function() { //'listening' listener
    console.log('server bound');
});

function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
}

function now () {
    const d = new Date()
    return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
}
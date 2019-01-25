const server = require('http').createServer();
const io = require('socket.io')(server);

let connectCounter = 0;

io.on('connection', function (socket) {
    connectCounter++;
    sendConnectCounter();

    socket.on('disconnect', function () {
        connectCounter--;
        sendConnectCounter();
    });
});

function sendConnectCounter() {
    io.emit('counter', connectCounter);
}


server.listen(3000, function (err) {
    if (err) throw err;
    console.log('Socket listening on port 3000')
});
let connectCounter = 0;

module.exports = (io) => {
    io.on('connection', function (socket) {
        connectCounter++;
        sendConnectCounter(io);

        socket.on('disconnect', function () {
            connectCounter--;
            sendConnectCounter(io);
        });
    });

};

function sendConnectCounter(io) {
    io.emit('counter', connectCounter);
}
const io = require("socket.io")

class Socket {
    public socket;

    connect(server) {
        this.socket = io(server);

        this.socket.on("connection", function(socket: any) {
            socket.emit('connection', 'connected');
        });
    }

    on(event, cb) {
        this.socket.on(event, (data) => cb(data));
    }

    emit(event, data) {
        this.socket.emit(event, data);
    }
}

export default new Socket();
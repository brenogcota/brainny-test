import io from "socket.io-client";
import { server } from "../constants";

class SocketClient {
    socket = null;

    constructor() {
        this.socket = io(server, { transports : ['websocket'] });
    }

    on(event, cb) {
        this.socket.on(event, (data) => cb(data))
    }

    emit(event, data) {
        this.socket.emit(event, data);
    }
}

export default new SocketClient();
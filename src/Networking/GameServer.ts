import net = require('net');
import Emulator from '../Emulator';

export default class GameServer {
    private host: string;
    private port: number;
    private server: net.Server;

    public constructor(host: string, port: number) {
        this.host = host;
        this.port = port;
    }

    public initialise(): void {
        this.server = net.createServer();
        this.server.on('connection', this.handleConnection);
    }

    public handleConnection(c: net.Socket): void {
        c.write(new Buffer('@@' + String.fromCharCode(1), 'utf8'));

        c.on('data', function(buffer: Buffer) {
            let countPackets: number = 0;
            let maxPackets: number = 15;

            console.log(buffer.toString('utf8'));
        });

        c.on('error', function() {

        });

        console.log(c.remoteAddress, c.remotePort);
    }

    public connect(): void {
        this.server.listen(this.port, this.host);
    }
}

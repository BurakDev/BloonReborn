import net = require('net');
import Emulator from '../Emulator';
import B64 from '../Protocol/B64';
import PacketManager from '../Messages/PacketManager';
import ClientMessage from '../Messages/ClientMessage';
import GameClient from './GameClient';
import GameClientManager from './GameClientManager';

export default class GameServer {
    private host: string;
    private port: number;
    private server: net.Server;
    private packetManager: PacketManager;
    private gameClientManager: GameClientManager;

    public constructor(host: string, port: number) {
        this.host = host;
        this.port = port;
        this.packetManager = new PacketManager();
        this.gameClientManager = new GameClientManager();
    }

    public initialise(): void {
        this.server = net.createServer();
        this.server.on('connection', this.handleConnection);
    }

    public handleConnection(c: GameClient): void {
        Emulator.getGameServer().getGameClientManager().addClient(c);

        let x: GameClient = new GameClient();
        c.sendResponse = x.sendResponse;
        c.sendResponses = x.sendResponses;
        c.dispose = x.dispose;

        c.write(new Buffer('@@' + String.fromCharCode(1), 'utf8'));

        c.on('data', function(buffer: Buffer) {
            let countPackets: number = 0;
            let maxPackets: number = 15;
            let buff = buffer.toString('utf8');

            while (buff.length > 4) {
                if (countPackets++ >= maxPackets) {
                    c.destroy();
                    return;
                }

                let length: number = B64.decode(buff.substring(1, 3)) + 3;

                let packet: string = buff.substring(3, length);

                Emulator.getGameServer().getPacketManager().handlePacket(c, new ClientMessage(B64.decode(packet.substring(0, 2)), packet.substring(2)));

                buff = buff.substring(length);
            }
        });

        c.on('error', function() {
            c.dispose();
        });

        c.on('close', function() {
            c.dispose();
        });

        c.on('end', function() {
            c.dispose();
        });

        console.log(c.remoteAddress, c.remotePort);
    }

    public connect(): void {
        this.server.listen(this.port, this.host);
    }

    public getPacketManager(): PacketManager {
        return this.packetManager;
    }

    public getGameClientManager(): GameClientManager {
        return this.gameClientManager;
    }
}

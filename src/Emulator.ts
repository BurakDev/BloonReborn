/// <reference path="refs/node.d.ts" />
/// <reference path="refs/ini.d.ts" />
/// <reference path="refs/mysql.d.ts" />
/// <reference path="refs/pathfinding.d.ts" />
import GameServer from './Networking/GameServer';

export default class Emulator {
    private static gameServer: GameServer;

    public static main(): void {
        Emulator.gameServer = new GameServer("127.0.0.1", 1232);
        Emulator.gameServer.initialise();
        Emulator.gameServer.connect();
    }

    public static getGameServer(): GameServer {
        return this.gameServer;
    }
}

Emulator.main();

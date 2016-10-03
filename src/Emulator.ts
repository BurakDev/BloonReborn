/// <reference path="refs/node.d.ts" />
/// <reference path="refs/ini.d.ts" />
/// <reference path="refs/mysql.d.ts" />
/// <reference path="refs/pathfinding.d.ts" />
import GameServer from './Networking/GameServer';
import Logging from './Core/Logging';

export default class Emulator {
    private static gameServer: GameServer;
    private static logging: Logging;

    public static main(): void {
        Emulator.gameServer = new GameServer("127.0.0.1", 1232);
        Emulator.gameServer.initialise();
        Emulator.gameServer.connect();
        Emulator.logging = new Logging();
    }

    public static getGameServer(): GameServer {
        return this.gameServer;
    }

    public static getLogging(): Logging {
        return this.logging;
    }
}

Emulator.main();

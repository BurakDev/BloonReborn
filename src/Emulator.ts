/// <reference path="refs/node.d.ts" />
/// <reference path="refs/ini.d.ts" />
/// <reference path="refs/mysql.d.ts" />
/// <reference path="refs/pathfinding.d.ts" />
import GameServer from './Networking/GameServer';
import Logging from './Core/Logging';
import ConfigurationManager from './Core/ConfigurationManager';

export default class Emulator {
    private static gameServer: GameServer;
    private static logging: Logging;
    private static configurationManager: ConfigurationManager;

    public static main(): void {
        Emulator.configurationManager = new ConfigurationManager('../config.ini');
        Emulator.gameServer = new GameServer(Emulator.getConfigurationManager().getValue('game.host', '127.0.0.1'), Emulator.getConfigurationManager().getInt('game.port', 1232));
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

    public static getConfigurationManager(): ConfigurationManager {
        return this.configurationManager;
    }
}

Emulator.main();

/// <reference path="refs/node.d.ts" />
/// <reference path="refs/ini.d.ts" />
/// <reference path="refs/mysql.d.ts" />
/// <reference path="refs/pathfinding.d.ts" />
import GameServer from './Networking/GameServer';
import Logging from './Core/Logging';
import ConfigurationManager from './Core/ConfigurationManager';
import GameEnvironment from './HabboHotel/GameEnvironment';
import Database from './Database/Database';

export default class Emulator {
    private static gameServer: GameServer;
    private static logging: Logging;
    private static database: Database;
    private static configurationManager: ConfigurationManager;
    private static gameEnvironment: GameEnvironment;

    public static main(): void {
        Emulator.configurationManager = new ConfigurationManager('../config.ini');
        Emulator.logging = new Logging();
        Emulator.database = new Database(Emulator.getConfigurationManager());
        Emulator.gameEnvironment = new GameEnvironment();
        Emulator.gameEnvironment.load();
        Emulator.gameServer = new GameServer(Emulator.getConfigurationManager().getValue('game.host', '127.0.0.1'), Emulator.getConfigurationManager().getInt('game.port', 1232));
        Emulator.gameServer.initialise();
        Emulator.gameServer.connect();
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

    public static getGameEnvironment(): GameEnvironment {
        return this.gameEnvironment;
    }

    public static getDatabase(): Database {
        return this.database;
    }
}

Emulator.main();

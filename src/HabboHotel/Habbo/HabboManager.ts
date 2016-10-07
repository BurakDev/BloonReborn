import Emulator from '../../Emulator';
import Habbo from './Habbo';
import GameClient from '../../Networking/GameClient';

export default class HabboManager {
    private onlineHabbos: Array<Habbo>;

    public constructor() {
        this.onlineHabbos = new Array<Habbo>();
    }

    public removeHabbo(habbo: Habbo): void {
        this.onlineHabbos.slice(habbo.getId(), 1);
    }

    public getHabbo(search: number | string): Habbo {
        if (typeof search == 'number') {
            return this.onlineHabbos[<number>search];
        } else if (typeof search == 'string') {
            this.onlineHabbos.forEach(function(habbo: Habbo) {
                if (search.toString().toLowerCase() === habbo.getUsername().toLowerCase()) {
                    return habbo;
                }
            });
        }
    }

    public authByTicket(sso: string, client: GameClient, cb: (client: GameClient, habbo: Habbo) => void): void {

    }

    public authByLogin(username: string, password: string, client: GameClient, cb: (client: GameClient, habbo: Habbo) => void): void {
        Emulator.getDatabase().getPool().getConnection(function(err, connection) { //TODO: Password hash
            connection.query('SELECT * FROM users WHERE username = ? AND password = ? LIMIT 1', [username, password], function(err, rows) {
                if (rows.length == 1) {
                    let row = rows[0];
                    let h: Habbo = Emulator.getGameEnvironment().getHabboManager().getHabbo(<number>row.id);

                    if (h != null) {
                        h.getGameClient().destroy();
                        h = null;
                    }

                    let habbo = new Habbo(row);
                    cb(client, habbo);
                } else {
                    client.destroy();
                }

                connection.release();
            });
        });
    }
}

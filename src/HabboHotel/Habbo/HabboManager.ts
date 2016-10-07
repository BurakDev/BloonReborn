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

    }
}

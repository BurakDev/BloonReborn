import MessageComposer from '../MessageComposer';
import ServerMessage from '../../ServerMessage';
import Outgoing from '../Outgoing';
import Habbo from '../../../HabboHotel/Habbo/Habbo';

export default class UserBadgesComposer extends MessageComposer { //TODO
    private habbo: Habbo;

    public constructor(habbo: Habbo) {
        super();
        this.habbo = habbo;
    }
    public compose(): ServerMessage {
        this.response.init(Outgoing.UserBadgesComposer);
        this.response.appendVL64(0);
        this.response.appendVL64(0);
        this.response.appendVL64(0);
        return this.response;
    }
}

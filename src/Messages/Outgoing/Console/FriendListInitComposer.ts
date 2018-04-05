import MessageComposer from '../MessageComposer';
import ServerMessage from '../../ServerMessage';
import Outgoing from '../Outgoing';
import Habbo from '../../../HabboHotel/Habbo/Habbo';

export default class FriendListInitComposer extends MessageComposer {
    private habbo: Habbo;

    public constructor(habbo: Habbo) {
        super();
        this.habbo = habbo;
    }
    public compose(): ServerMessage {
        this.response.init(Outgoing.FriendListInitComposer);
        this.response.appendRawString(this.habbo.getConsoleMission());
        this.response.appendCut();
        return this.response;
    }
}

import MessageComposer from '../MessageComposer';
import ServerMessage from '../../ServerMessage';
import Outgoing from '../Outgoing';
import Habbo from '../../../HabboHotel/Habbo/Habbo';

export default class UserSubscriptionComposer extends MessageComposer { //TODO
    private habbo: Habbo;

    public constructor(habbo: Habbo) {
        super();
        this.habbo = habbo;
    }
    public compose(): ServerMessage {
        this.response.init(Outgoing.UserSubscriptionComposer);
        this.response.appendRawString("club_habbo");
        this.response.appendCut();
        this.response.appendVL64(0);
        this.response.appendVL64(0);
        this.response.appendVL64(0);
        this.response.appendVL64(1);
        return this.response;
    }
}

import MessageComposer from '../MessageComposer';
import ServerMessage from '../../ServerMessage';
import Outgoing from '../Outgoing';
import Habbo from '../../../HabboHotel/Habbo/Habbo';

export default class UserCreditsComposer extends MessageComposer {
    private habbo: Habbo;

    public constructor(habbo: Habbo) {
        super();
        this.habbo = habbo;
    }
    public compose(): ServerMessage {
        this.response.init(Outgoing.UserCreditsComposer);
        this.response.appendRawString(this.habbo.getCredits().toString() + ".0");
        return this.response;
    }
}

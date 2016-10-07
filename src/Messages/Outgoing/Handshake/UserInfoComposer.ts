import MessageComposer from '../MessageComposer';
import ServerMessage from '../../ServerMessage';
import Outgoing from '../Outgoing';
import Habbo from '../../../HabboHotel/Habbo/Habbo';

export default class UserInfoComposer extends MessageComposer {
    private habbo: Habbo;

    public constructor(habbo: Habbo) {
        super();
        this.habbo = habbo;
    }
    public compose(): ServerMessage {
        this.response.init(Outgoing.UserInfoComposer);
        this.response.appendCut();
        this.response.appendRawString(this.habbo.getUsername());
        this.response.appendCut();
        this.response.appendRawString(this.habbo.getId().toString());
        this.response.appendCut();
        this.response.appendRawString(this.habbo.getGender());
        this.response.appendCut();
        this.response.appendRawString(this.habbo.getMission());
        this.response.appendCut();
        this.response.appendVL64(0);
        this.response.appendRawString(this.habbo.getFigure());
        this.response.appendCut();
        this.response.appendVL64(0);
        return this.response;
    }
}

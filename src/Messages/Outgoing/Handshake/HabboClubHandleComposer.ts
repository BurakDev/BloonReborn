import MessageComposer from '../MessageComposer';
import ServerMessage from '../../ServerMessage';
import Outgoing from '../Outgoing';

export default class HabboClubHandleComposer extends MessageComposer {
    public constructor() {
        super();
    }
    public compose(): ServerMessage {
        this.response.init(Outgoing.HabboClubHandleComposer);
        return this.response;
    }
}

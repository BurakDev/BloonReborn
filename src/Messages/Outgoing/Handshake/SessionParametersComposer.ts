import MessageComposer from '../MessageComposer';
import ServerMessage from '../../ServerMessage';
import Outgoing from '../Outgoing';

export default class SessionParametersComposer extends MessageComposer {

    public constructor() {
        super();
    }
    public compose(): ServerMessage {
        this.response.init(Outgoing.SessionParametersComposer);
        this.response.appendVL64(6);
        this.response.appendVL64(0);
        this.response.appendVL64(1);
        this.response.appendVL64(1);
        this.response.appendVL64(1);
        this.response.appendVL64(3);
        this.response.appendVL64(0);
        this.response.appendVL64(2);
        this.response.appendVL64(1);
        this.response.appendVL64(4);
        this.response.appendVL64(1);
        this.response.appendVL64(5);
        this.response.appendRawString("dd-MM-yyyy");
        this.response.appendCut();
        return this.response;
    }
}

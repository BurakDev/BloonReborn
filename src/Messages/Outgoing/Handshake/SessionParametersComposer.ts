import MessageComposer from '../MessageComposer';
import ServerMessage from '../../ServerMessage';
import Outgoing from '../Outgoing';

export default class SessionParametersComposer extends MessageComposer {

    public constructor() {
        super();
    }
    public compose(): ServerMessage {
        this.response.init(Outgoing.SessionParametersComposer);
        this.response.appendRawString("RAHIIIKHJIPAIQAdd-MM-yyyy");
        this.response.appendCut();
        return this.response;
    }
}

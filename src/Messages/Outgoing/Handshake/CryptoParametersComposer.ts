import MessageComposer from '../MessageComposer';
import ServerMessage from '../../ServerMessage';
import Outgoing from '../Outgoing';

export default class CryptoParametersComposer extends MessageComposer {

    public constructor() {
        super();
    }
    public compose(): ServerMessage {
        this.response.init(Outgoing.CryptoParametersComposer);
        this.response.appendVL64(1);
        this.response.appendVL64(0);
        return this.response;
    }
}

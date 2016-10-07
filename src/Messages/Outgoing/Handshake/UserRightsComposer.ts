import MessageComposer from '../MessageComposer';
import ServerMessage from '../../ServerMessage';
import Outgoing from '../Outgoing';

export default class UserRightsComposer extends MessageComposer {
    private rights: Array<string>;

    public constructor(rights: Array<string>) {
        super();
        this.rights = rights;
    }
    public compose(): ServerMessage {
        this.response.init(Outgoing.UserRightsComposer);
        this.response.appendRawString(this.rights.join(String.fromCharCode(2)));
        return this.response;
    }
}

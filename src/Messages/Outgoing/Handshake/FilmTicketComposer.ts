import MessageComposer from '../MessageComposer';
import ServerMessage from '../../ServerMessage';
import Outgoing from '../Outgoing';

export default class FilmTicketComposer extends MessageComposer {
    private count: number;

    public constructor(count: number) {
        super();
        this.count = count;
    }
    public compose(): ServerMessage {
        this.response.init(Outgoing.FilmTicketComposer);
        this.response.appendVL64(this.count);
        return this.response;
    }
}

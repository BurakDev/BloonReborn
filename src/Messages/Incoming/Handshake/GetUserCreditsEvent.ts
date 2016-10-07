import MessageHandler from '../MessageHandler';
import Emulator from '../../../Emulator';
import UserCreditsComposer from '../../Outgoing/Handshake/UserCreditsComposer';

export default class GetUserCreditsEvent extends MessageHandler {
    public handle(): void {
        if (!this.client.getHabbo())
            return;

        this.client.sendResponse(new UserCreditsComposer(this.client.getHabbo()));
    }
}

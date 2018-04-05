import MessageHandler from '../MessageHandler';
import Emulator from '../../../Emulator';
import UserBadgesComposer from '../../Outgoing/Handshake/UserBadgesComposer';

export default class GetUserBadgesEvent extends MessageHandler {
    public handle(): void {
        if (!this.client.getHabbo())
            return;

        this.client.sendResponse(new UserBadgesComposer(this.client.getHabbo()));
    }
}

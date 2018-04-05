import MessageHandler from '../MessageHandler';
import Emulator from '../../../Emulator';
import UserSubscriptionComposer from '../../Outgoing/Handshake/UserSubscriptionComposer';

export default class GetUserSubscriptionEvent extends MessageHandler {
    public handle(): void {
        if (!this.client.getHabbo())
            return;

        this.client.sendResponse(new UserSubscriptionComposer(this.client.getHabbo()));
    }
}

import MessageHandler from '../MessageHandler';
import Emulator from '../../../Emulator';
import FriendListInitComposer from '../../Outgoing/Console/FriendListInitComposer';

export default class FriendListInitEvent extends MessageHandler {
    public handle(): void {
        if (!this.client.getHabbo())
            return;

        this.client.sendResponse(new FriendListInitComposer(this.client.getHabbo()));
    }
}

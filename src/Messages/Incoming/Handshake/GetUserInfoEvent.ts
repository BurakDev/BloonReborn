import MessageHandler from '../MessageHandler';
import Emulator from '../../../Emulator';
import UserInfoComposer from '../../Outgoing/Handshake/UserInfoComposer';

export default class GetUserInfoEvent extends MessageHandler {
    public handle(): void {
        if (!this.client.getHabbo())
            return;

        this.client.sendResponse(new UserInfoComposer(this.client.getHabbo()));
    }
}

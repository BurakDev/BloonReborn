import MessageHandler from '../MessageHandler';
import Emulator from '../../../Emulator';
import CryptoParametersComposer from '../../Outgoing/Handshake/CryptoParametersComposer';

export default class InitCryptoEvent extends MessageHandler {
    public handle(): void {
        this.client.sendResponse(new CryptoParametersComposer());
    }
}

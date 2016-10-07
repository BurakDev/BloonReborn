import MessageHandler from '../MessageHandler';
import Emulator from '../../../Emulator';
import SessionParametersComposer from '../../Outgoing/Handshake/SessionParametersComposer';
import InitCryptoComposer from '../../Outgoing/Handshake/InitCryptoComposer';

export default class GenerateSecretKeyEvent extends MessageHandler {
    public handle(): void {
    	this.client.sendResponse(new SessionParametersComposer());
    	this.client.sendResponse(new InitCryptoComposer());
    }
}

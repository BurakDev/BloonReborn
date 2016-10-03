import GameClient from '../../Networking/GameClient';
import ClientMessage from '../ClientMessage';

abstract class MessageHandler {
    public client: GameClient;
    public packet: ClientMessage;

    public abstract handle(): void;
}

export default MessageHandler;

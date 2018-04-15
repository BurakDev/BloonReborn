import net = require('net');
import ServerMessage from '../Messages/ServerMessage';
import MessageComposer from '../Messages/Outgoing/MessageComposer';
import Emulator from '../Emulator';
import Logging from '../Core/Logging';
import Habbo from '../HabboHotel/Habbo/Habbo';
import B64 from '../Protocol/B64';

export default class GameClient extends net.Socket {
    private habbo: Habbo;

    public constructor() {
        super();
    }

    public sendResponse(response: MessageComposer | ServerMessage): void {
        if (response instanceof MessageComposer) {
            let packet: ServerMessage = response.compose();

            Emulator.getLogging().logPacketLine("[" + Logging.ANSI_PURPLE + "SERVER" + Logging.ANSI_RESET + "][" + Emulator.getGameServer().getPacketManager().getOutgoingName(packet.getHeader()) + "][" + packet.getHeader() + "/" + B64.encode(packet.getHeader()) + "] => " + packet.getMessageBody());
            this.write(packet.get());
        } else if (response instanceof ServerMessage) {
            Emulator.getLogging().logPacketLine("[" + Logging.ANSI_PURPLE + "SERVER" + Logging.ANSI_RESET + "][" + Emulator.getGameServer().getPacketManager().getOutgoingName(response.getHeader()) + "][" + response.getHeader() + "/" + B64.encode(response.getHeader()) + "] => " + response.getMessageBody());
            this.write(response.get());
        }
    }

    public sendResponses(responses: Array<ServerMessage>) {
        for (let i = 0; i < responses.length; i++) {
            this.sendResponse(responses[i]);
        }
    }

    public dispose(): void {

    }

    public getHabbo(): Habbo {
        return this.habbo;
    }

    public setHabbo(habbo: Habbo): void {
        this.habbo = habbo;
    }
}

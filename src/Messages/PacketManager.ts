import Emulator from '../Emulator';
import Logging from '../Core/Logging';
import ClientMessage from './ClientMessage';
import GameClient from '../Networking/GameClient';
import Incoming from './Incoming/Incoming';
import Outgoing from './Outgoing/Outgoing';
import B64 from '../Protocol/B64';

import InitCryptoEvent from './Incoming/Handshake/InitCryptoEvent';
import GenerateSecretKeyEvent from './Incoming/Handshake/GenerateSecretKeyEvent';
import LoginEvent from './Incoming/Handshake/LoginEvent';
import GetUserInfoEvent from './Incoming/Handshake/GetUserInfoEvent';
import GetUserCreditsEvent from './Incoming/Handshake/GetUserCreditsEvent';
import GetUserBadgesEvent from './Incoming/Handshake/GetUserBadgesEvent';
import GetUserSubscriptionEvent from './Incoming/Handshake/GetUserSubscriptionEvent';
import FriendListInitEvent from './Incoming/Console/FriendListInitEvent';

export default class PacketManager {
    private incoming: Array<any>;
    private outgoingNames: Array<string>;
    private incomingReflect: Array<string>;

    public constructor() {
        this.incoming = new Array<any>();
        this.outgoingNames = new Array<string>();
        let keys: Array<string> = Object.keys(Outgoing);

        for (let i = 0; i < keys.length; i++) {
            let key: string = keys[i];
            let value: number = Outgoing[key];
            this.outgoingNames[value] = key;
        }

        this.incomingReflect = Object.getOwnPropertyNames(Incoming);
        for(let j = 0; j < 5; j++)
            this.incomingReflect.shift();

        this.registerHandshake();
        this.registerConsole();
    }

    public getOutgoingName(header: number): string {
        return this.outgoingNames[header] ? this.outgoingNames[header] : "NotFoundComposer";
    }

    public handlePacket(client: GameClient, packet: ClientMessage): void {
        if (client == null)
            return;

        try {
            if (this.isRegistered(packet.getHeader())) {
                let handler = new this.incoming[packet.getHeader()]();

                Emulator.getLogging().logPacketLine("[" + Logging.ANSI_CYAN + "CLIENT" + Logging.ANSI_RESET + "][" + handler.constructor.name + "] => " + packet.getMessageBody());

                handler.client = client;
                handler.packet = packet;

                handler.handle();
            } else {
                let found: boolean = false;

                for(let i = 0; i < this.incomingReflect.length; i++) {
                    if (packet.getHeader() == Incoming[this.incomingReflect[i]]) {
                        Emulator.getLogging().logPacketLine("[" + Logging.ANSI_CYAN + "CLIENT" + Logging.ANSI_RESET + "][" + Logging.ANSI_RED + "NOT IMPLEMENTED" + Logging.ANSI_RESET + "][" + this.incomingReflect[i] + "][" + packet.getHeader() + "/" + B64.encode(packet.getHeader()) + "] => " + packet.getMessageBody());
                        found = true;
                    }
                }
                if (!found)
                    Emulator.getLogging().logPacketLine("[" + Logging.ANSI_CYAN + "CLIENT" + Logging.ANSI_RESET + "][" + Logging.ANSI_RED + "UNDEFINED" + Logging.ANSI_RESET + "][" + packet.getHeader() + "/" + B64.encode(packet.getHeader()) + "] => " + packet.getMessageBody());
            }
        } catch (e) {
            console.error(e);
        }
    }

    public isRegistered(header: number): boolean {
        return header in this.incoming;
    }

    public registerHandler(header: number, handler: any): void {
        this.incoming[header] = handler;
    }

    public registerHandshake(): void {
        this.registerHandler(Incoming.InitCryptoEvent, InitCryptoEvent);
        this.registerHandler(Incoming.GenerateSecretKeyEvent, GenerateSecretKeyEvent);
        this.registerHandler(Incoming.LoginEvent, LoginEvent);
        this.registerHandler(Incoming.GetUserInfoEvent, GetUserInfoEvent);
        this.registerHandler(Incoming.GetUserCreditsEvent, GetUserCreditsEvent);
        this.registerHandler(Incoming.GetUserBadgesEvent, GetUserBadgesEvent);
        this.registerHandler(Incoming.GetUserSubscriptionEvent, GetUserSubscriptionEvent)
    }

    public registerConsole(): void {
        this.registerHandler(Incoming.FriendListInitEvent, FriendListInitEvent);
    }
}

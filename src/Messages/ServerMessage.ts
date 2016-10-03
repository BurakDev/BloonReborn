import B64 from '../Protocol/B64';
import VL64 from '../Protocol/VL64';

export default class ServerMessage {
    private header: number;
    private buffer: string;

    public constructor(header?: number) {
        this.buffer = "";

        if (header) {
            this.header = header;
            this.buffer += B64.encode(header);
        }
    }

    public init(header: number): void {
        this.header = header;
        this.buffer = B64.encode(header);
    }

    public appendB64(number: number): void {
        this.buffer += B64.encode(number);
    }

    public appendVL64(number: number): void {
        this.buffer += VL64.encode(number);
    }

    public appendString(string: string): void {
        this.buffer += B64.encode(string.length) + string;
    }

    public appendRawString(string: string): void {
        this.buffer += string;
    }

    public appendCut(): void {
        this.buffer += String.fromCharCode(2);
    }

    public getMessageBody(): string {
        return this.buffer.substring(2);
    }

    public getHeader(): number {
        return this.header;
    }

    public get(): string {
        return this.buffer + String.fromCharCode(1);
    }
}

import B64 from '../Protocol/B64';
import VL64 from '../Protocol/VL64';

export default class ClientMessage {
    private header: number;
    private buffer: string;

    public constructor(header: number, buffer: string) {
        this.header = header;
        this.buffer = buffer;
    }

    public readVL64(): number {
        let decode: number = VL64.decode(this.buffer);
        this.buffer = this.buffer.substring(VL64.encode(decode).length);

        return decode;
    }

    public readB64(): number {
        let decode: number = B64.decode(this.buffer.substring(0, 2));
        this.buffer = this.buffer.substring(2);

        return decode;
    }

    public readString(): string {
        let length: number = this.readB64();
        let result: string = this.buffer.substring(0, length);
        this.buffer = this.buffer.substring(length);

        return result;
    }

    public getHeader(): number {
        return this.header;
    }

    public getMessageBody(): string {
        return this.buffer;
    }
}

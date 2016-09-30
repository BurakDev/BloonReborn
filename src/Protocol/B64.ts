export default class B64 {
    public static encode(number: number): string {
        let buff = new Array<string>('@', '@');

        for (let i = 0; number > 0; ++i, number = Math.floor(number / 64))
            buff[i] = String.fromCharCode((number % 64) + 64);

        return buff.reverse().join('');
    }

    public static decode(string: string): number {
        let number = 0;

        for (let i = (string.length - 1), j = 0; i >= 0; --i, ++j)
            number += (string.charCodeAt(i) - 64) * Math.pow(64, j);

        return number;
    }
}

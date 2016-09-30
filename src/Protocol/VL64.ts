export default class VL64 {
    public static encode(number: number): string {
        let str = new Array<string>();
        let i = 1;
        let absolute = Math.abs(number) >> 2;

        for (; absolute > 0; absolute >>= 6, ++i)
            str[i] = String.fromCharCode(64 | (absolute & 63));

        str[0] = String.fromCharCode(64 | i << 3 | (number <= 0 ? 1 : 0) << 2 | (Math.abs(number) & 3));

        return str.join('');
    }

    public static decode(string: string): number {
        let number = 0;
        let ctrl = ((string.charCodeAt(0) - 64) >> 2);
        let bytes = ((ctrl >> 1) - 1);

        for (; bytes > 0; --bytes && (number <<= 6))
            number += (string.charCodeAt(bytes) & 63);

        number = (number << 2) + ((string.charCodeAt(0) - 64) & 3);

        if (ctrl & 1)
            number *= -1;

        return number;
    }
}

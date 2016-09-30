/// <reference path="refs/node.d.ts" />
/// <reference path="refs/ini.d.ts" />
/// <reference path="refs/mysql.d.ts" />
/// <reference path="refs/pathfinding.d.ts" />
import B64 from './Protocol/B64';
import VL64 from './Protocol/VL64';

export default class Emulator {
    public static main(): void {
        console.log(B64.encode(1));
        console.log(B64.decode("@A"));
        console.log(B64.decode(B64.encode(2048)));
        console.log("---------------");
        console.log(VL64.encode(1));
        console.log(VL64.decode("I"));
        console.log(VL64.decode(VL64.encode(2048)));
    }
}

Emulator.main();

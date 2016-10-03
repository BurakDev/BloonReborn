/// <reference path="refs/node.d.ts" />
/// <reference path="refs/ini.d.ts" />
/// <reference path="refs/mysql.d.ts" />
/// <reference path="refs/pathfinding.d.ts" />
import VL64 from './Protocol/VL64';
import B64 from './Protocol/B64';

export default class Util {
    public static main(): void {
        console.log(B64.decode("@H"));
    }
}

Util.main();

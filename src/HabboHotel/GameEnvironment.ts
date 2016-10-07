import Emulator from '../Emulator';
import HabboManager from './Habbo/HabboManager';

export default class GameEnvironment {
    private habboManager: HabboManager;

    public load(): void {
        this.habboManager = new HabboManager();
    }

    public getHabboManager(): HabboManager {
        return this.habboManager;
    }
}

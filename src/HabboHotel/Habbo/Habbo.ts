import GameClient from '../../Networking/GameClient';

export default class Habbo {
    private gameClient: GameClient;
    private id: number;
    private username: string;
    private password: string;
    private email: string;
    private authTicket: string;
    private rank: number;
    private credits: number;
    private gameTickets: number;
    private birth: Date;
    private figure: string;
    private mission: string;
    private consoleMission: string;
    private gender: string;
    private lastOnline: Date;
    private online: boolean;
    private ipLast: string;
    private ipReg: string;

    public constructor(row) {
        this.id = <number>row.id;
        this.username = row.username;
        this.password = row.password;
        this.email = row.email;
        this.authTicket = row.auth_ticket;
        this.rank = <number>row.rank;
        this.credits = <number>row.credits;
        this.gameTickets = <number>row.game_ticket;
        this.birth = <Date>row.birth;
        this.figure = row.figure;
        this.mission = row.mission;
        this.consoleMission = row.console_mission;
        this.gender = row.gender == "F" ? "F" : "M";
        this.lastOnline = <Date>row.last_online;
        this.online = true;
        this.ipLast = row.ip_last;
        this.ipReg = row.ip_reg;
    }

    public getGameClient(): GameClient {
        return this.gameClient;
    }

    public getId(): number {
        return this.id;
    }

    public getUsername(): string {
        return this.username;
    }

    public getGender(): string {
        return this.gender;
    }

    public getMission(): string {
        return this.mission;
    }

    public getFigure(): string {
        return this.figure;
    }

    public getCredits(): number {
        return this.credits;
    }

    public getConsoleMission(): string {
        return this.consoleMission;
    }

    public setGameClient(gameClient: GameClient): void {
        this.gameClient = gameClient;
    }
}

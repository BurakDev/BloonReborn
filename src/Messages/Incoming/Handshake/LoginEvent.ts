import MessageHandler from '../MessageHandler';
import Emulator from '../../../Emulator';
import GameClient from '../../../Networking/GameClient';
import Habbo from '../../../HabboHotel/Habbo/Habbo';
import InitCryptoComposer from '../../Outgoing/Handshake/InitCryptoComposer';
import UserRightsComposer from '../../Outgoing/Handshake/UserRightsComposer';
import FilmTicketComposer from '../../Outgoing/Handshake/FilmTicketComposer';
import HabboClubHandleComposer from '../../Outgoing/Handshake/HabboClubHandleComposer';

export default class LoginEvent extends MessageHandler {
    public handle(): void {
        let username = this.packet.readString();
        let password = this.packet.readString();

        Emulator.getGameEnvironment().getHabboManager().authByLogin(username, password, this.client, function(client: GameClient, habbo: Habbo) {
            habbo.setGameClient(client);
            client.setHabbo(habbo);

            client.sendResponse(new InitCryptoComposer());
            client.sendResponse(new UserRightsComposer("fuse_room_queue_default.fuse_trade.fuse_buy_credits.fuse_login.fuse_receive_calls_for_help.fuse_moderator_access.fuse_room_alert.fuse_any_room_controller.fuse_ignore_room_owner.fuse_pick_up_any_furni.fuse_alert.fuse_receive_calls_for_help.fuse_room_kick.fuse_administrator_access.fuse_remove_stickies.fuse_enter_locked_rooms.fuse_superban.fuse_kick.fuse_habbo_chooser.fuse_furni_chooser.fuse_enter_full_rooms.fuse_room_mute.fuse_mod.fuse_ban.fuse_mute.fuse_see_flat_ids.defaultpockethabbo_content_download_allowed.fuse_login.default.pockethabbo_messenger_allowed.fuse_use_special_room_layouts.fuse_room_queue_default.fuse_buy_credits.fuse_extended_buddylist.fuse_priority_access.fuse_trade.fuse_use_club_outfits.fuse_use_club_badge.fuse_use_special_room_layouts.fuse_room_queue_club.fuse_room_queue_default.fuse_use_club_dance.fuse_priority_access.fuse_habbo_chooser.fuse_furni_chooser.default".split('.')));
            client.sendResponse(new FilmTicketComposer(0));
            client.sendResponse(new HabboClubHandleComposer());
        });
    }
}

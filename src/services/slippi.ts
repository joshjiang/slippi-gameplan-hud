import { SlpFolderStream, SlpRealTime } from '@vinceau/slp-realtime';
import { Character } from '@slippi/slippi-js';

export default class SlippiClient {

    setPlayerPercent = (player: any, percent: any) => {
        console.log(`player${player}Percent: ${percent}`);
    };

    public startSLP = () => {
        const folder = `C:/Users/User/Documents/Slippi`;
        console.log(`Monitoring folder:`, folder);

        const stream = new SlpFolderStream();
        const realtime = new SlpRealTime();
        realtime.setStream(stream);

        // Get character
        realtime.game.start$.subscribe((payload) => {
            console.log(`Detected a new game in ${stream.latestFile()}`);
            console.log(Character[payload.players[0].characterId!])
            console.log(Character[payload.players[1].characterId!])
        });

        realtime.game.end$.subscribe((payload) => {
            console.log(`Game ended in ${stream.latestFile()}`);
        });

        realtime.stock.percentChange$.subscribe((payload) => {
            const player = payload.playerIndex + 1;
            console.log(`player ${player} percent: ${payload.percent}`);
            this.setPlayerPercent(player, `${Math.floor(payload.percent)}%`);
        });

        // Start monitoring the folder for changes
        stream.start(folder);
    }

}
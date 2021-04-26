import { SlpFolderStream, SlpRealTime } from "@vinceau/slp-realtime";
import { characters } from "@slippi/slippi-js";
import { BrowserWindow } from "electron";

export default class SlippiClient {
  setPlayerPercent = (player: any, percent: any) => {
    console.log(`player${player}Percent: ${percent}`);
  };

  public startSLP = () => {
    const folder = "C:/Users/User/Documents/Slippi";
    console.log("Monitoring folder:", folder);

    const stream = new SlpFolderStream();
    const realtime = new SlpRealTime();
    realtime.setStream(stream);

    // Get character
    realtime.game.start$.subscribe((payload) => {
      const win = BrowserWindow.getFocusedWindow();

      win!.webContents.send("game-start", {
        character: characters.getCharacterName(payload.players[1].characterId!),
      });
      console.log(`Detected a new game in ${stream.latestFile()}`);
    });

    realtime.game.end$.subscribe((payload) => {
      const win = BrowserWindow.getFocusedWindow();
      console.log(`Game ended in ${stream.latestFile()}`);
      win!.webContents.send("game-end");
    });

    realtime.stock.percentChange$.subscribe((payload) => {
      const player = payload.playerIndex + 1;
      console.log(`player ${player} percent: ${payload.percent}`);
      this.setPlayerPercent(player, `${Math.floor(payload.percent)}%`);
    });

    // Start monitoring the folder for changes
    stream.start(folder);
  };
}

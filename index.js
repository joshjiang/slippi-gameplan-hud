const { SlpFolderStream, SlpRealTime } = require("@vinceau/slp-realtime");
const { Character } = require("@slippi/slippi-js");

const slpLiveFolderPath = "/mnt/c/Users/User/Documents/Slippi";

console.log(`Monitoring ${slpLiveFolderPath} for new SLP files`);

const setPlayerPercent = (player, percent) => {
  console.log(`player${player}Percent: ${percent}`);
};

// Connect to the relay
const stream = new SlpFolderStream();
const realtime = new SlpRealTime();
realtime.setStream(stream);

// Get character
realtime.game.start$.subscribe((payload) => {
  console.log(`Detected a new game in ${stream.latestFile()}`);
  console.log(Character[payload.players[0].characterId]);
  console.log(Character[payload.players[1].characterId]);
});

realtime.stock.percentChange$.subscribe((payload) => {
  const player = payload.playerIndex + 1;
  console.log(`player ${player} percent: ${payload.percent}`);
  setPlayerPercent(player, `${Math.floor(payload.percent)}%`);
});

// Start monitoring the folder for changes
stream.start(slpLiveFolderPath);

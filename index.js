/*
This script reads live slp files from a folder, and writes
the players stock count and percentages to a file.
*/

// TODO: Set this folder!!
const playerInfoFolder = "/mnt/c/Users/User/Desktop";

const { SlpFolderStream, SlpRealTime } = require("@vinceau/slp-realtime");
const fs = require("fs");
const path = require("path");

// TODO: Make sure you set this value!
const slpLiveFolderPath = "/mnt/c/Users/User/Documents/Slippi";
console.log(`Monitoring ${slpLiveFolderPath} for new SLP files`);

// Set up the handlers

const errHandler = (err) => {
  if (err) {
    console.error(err);
  }
};

const setPlayerStock = (player, stock) => {
  fs.writeFile(path.join(playerInfoFolder, `player${player}Stocks.txt`), stock, errHandler);
};

const setPlayerPercent = (player, percent) => {
  fs.writeFile(path.join(playerInfoFolder, `player${player}Percent.txt`), percent, errHandler);
};

// Connect to the relay
const stream = new SlpFolderStream();
const realtime = new SlpRealTime();
realtime.setStream(stream);
realtime.game.start$.subscribe(() => {
  console.log(`Detected a new game in ${stream.latestFile()}`);
});
realtime.stock.percentChange$.subscribe((payload) => {
  const player = payload.playerIndex + 1;
  console.log(`player ${player} percent: ${payload.percent}`);
  setPlayerPercent(player, `${Math.floor(payload.percent)}%`);
});

realtime.stock.countChange$.subscribe((payload) => {
  const player = payload.playerIndex + 1;
  console.log(`player ${player} stocks: ${payload.stocksRemaining}`);
  setPlayerStock(player, payload.stocksRemaining.toString());
});

// Reset the text files on game end
realtime.game.end$.subscribe(() => {
  setPlayerStock(1, "");
  setPlayerPercent(1, "");
  setPlayerStock(2, "");
  setPlayerPercent(2, "");
});

// Start monitoring the folder for changes
stream.start(slpLiveFolderPath);

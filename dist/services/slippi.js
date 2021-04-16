"use strict";
exports.__esModule = true;
var slp_realtime_1 = require("@vinceau/slp-realtime");
var slippi_js_1 = require("@slippi/slippi-js");
var SlippiClient = /** @class */ (function () {
  function SlippiClient() {
    var _this = this;
    this.setPlayerPercent = function (player, percent) {
      console.log("player" + player + "Percent: " + percent);
    };
    this.startSLP = function () {
      var folder = "C:/Users/User/Documents/Slippi";
      console.log("Monitoring folder:", folder);
      var stream = new slp_realtime_1.SlpFolderStream();
      var realtime = new slp_realtime_1.SlpRealTime();
      realtime.setStream(stream);
      // Get character
      realtime.game.start$.subscribe(function (payload) {
        console.log("Detected a new game in " + stream.latestFile());
        console.log(slippi_js_1.Character[payload.players[0].characterId]);
        console.log(slippi_js_1.Character[payload.players[1].characterId]);
      });
      realtime.game.end$.subscribe(function (payload) {
        console.log("Game ended in " + stream.latestFile());
      });
      realtime.stock.percentChange$.subscribe(function (payload) {
        var player = payload.playerIndex + 1;
        console.log("player " + player + " percent: " + payload.percent);
        _this.setPlayerPercent(player, Math.floor(payload.percent) + "%");
      });
      // Start monitoring the folder for changes
      stream.start(folder);
    };
  }
  return SlippiClient;
})();
exports["default"] = SlippiClient;
//# sourceMappingURL=slippi.js.map

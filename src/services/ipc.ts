import { ipcMain } from "electron";
import fs from "fs";
import { join } from "path";

function formatJson(note: string, character: string) {
  const date = new Date(Date.now()).toLocaleDateString("en-US");
  const noteJson = `{ "${character}" : {"plan": ${JSON.stringify(
    note
  )}, "updated": "${date}" }}`;
  const data = fs.readFileSync(
    join(__dirname, "/../../src/db/plans.json"),
    "utf-8"
  );
  const json = JSON.parse(data.toString());
  const input = JSON.parse(noteJson.toString());
  const mergedObject = {
    ...json,
    ...input,
  };
  return mergedObject;
}

export default function saveJson() {
  ipcMain.on("json-file", (event, note: string, character: string) => {
    console.log("json file yes")
    try {
      const json = formatJson(note, character);
      fs.writeFileSync(
        join(__dirname, "/../../src/db/plans.json"),
        JSON.stringify(json),
        "utf-8"
      );
      event.returnValue = 'Saved file'
    } catch (Error) {
      console.log(`Saving json failed: ${Error.message}`);
    }
  });
}

export function sendCharacter(character) {
  ipcMain.on("game-start", character);
}

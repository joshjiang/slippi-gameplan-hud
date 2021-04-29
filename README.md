# slp-gameplans

## Description
This is a desktop application that runs alongside [Slippi rollback Melee](slippi.gg). It pulls live game data using [slp-realtime](www.github.com/@vinceau/slp-realtime) to display your gameplan for that character on the game's start.

This app can help you if you align with following user stories: 

> As a melee player, I want to write matchup reminders and display them on a separate monitor at the start of each game. I want this so I can remember my gameplans and intentionally practice them. I want to do this versus any of the game's 26 characters.

> As a melee player, I want to write and display percent-based matchup reminders so that I can practice focusing on my percent-based strategies. I want to do this so I can execute relevant options at relevant percents, such as remembering the first possible percent that Fox can upsmash Jigglypuff on a given stage.

## Features
`TODO: Add screenshots`
### Create a Simple Gameplan
1. From the home screen, create a new gameplan
3. Open Dolphin and play an Unranked, Direct, or Melee game. The gameplan you just wrote will automatically load once the game starts

`TODO: Implement Percent-Based Gameplans`
### Create a Percent-Based Gameplan
1. From the home screen, create a new gameplan
2. Add a new Percent-Based Reminder. This reminder will appear on top of your existing plan once your opponent reaches that percentage.
3. Open Dolphin and play an Unranked, Direct, or Melee game. The gameplan you just wrote will automatically load once the game starts

`TODO: Implement post-game notes`
### Record Post-Game notes
1. After playing a game, record your notes reflecting on how your plan went.
2. View your notes by clicking on that character's plan from the home screen 

## Development
This app's main depedencies are
- `electron`
- `react`
- `webpack`
- `@vinceau/slp-realtime`

To start developing, install depedencies and start the electron dev server:

```
npm i && npm start 
```


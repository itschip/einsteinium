import { CoreEvents } from '../../shared/events';
import PlayerService from './player.service';

on(CoreEvents.PLAYER_JOINING, () => {
  const _source = global.source;

  PlayerService.handleNewPlayer(_source).catch((err) =>
    console.log(`Error when creating a new player. Error: ${err.message}`),
  );
});

on('onServerResourceStart', async (resource: string) => {
  if (resource === GetCurrentResourceName()) {
    const players = getPlayers();

    for (const player of players) {
      await PlayerService.handleNewPlayer(parseInt(player));
    }
  }
})

on(CoreEvents.PLAYER_DROPPED, (reason: string) => {
  const _source = global.source;

  PlayerService.handleRemovePlayer(_source);
});

// exports

global.exports('getPlayer', PlayerService.getPlayer);
global.exports('getIdentifier', PlayerService.getIdentifier);

global.exports('getKills', (source: number) => {
  return PlayerService.getPlayer(source).getKills();
})

global.exports('setKills', (source: number, kills: number) => {
  PlayerService.getPlayer(source).setKills(kills);
})

global.exports('getDeaths', (source: number) => {
  return PlayerService.getPlayer(source).getDeaths();
})

global.exports('setDeaths', (source: number, deaths: number) => {
  PlayerService.getPlayer(source).setDeaths(deaths);
})
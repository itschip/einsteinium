import { CoreEvents } from '../../shared/events';
import PlayerService from './player.service';

on(CoreEvents.PLAYER_JOINING, () => {
  const _source = global.source;

  PlayerService.handleNewPlayer(_source).catch((err) =>
    console.log(`Error when creating a new player. Error: ${err.message}`),
  );
});

on(CoreEvents.PLAYER_DROPPED, (reason: string) => {
  const _source = global.source;

  PlayerService.handleRemovePlayer(_source);
});

global.exports('getPlayer', (source: number) => PlayerService.getPlayer(source));
global.exports('getIdentifier', (source: number) => PlayerService.getIdentifier(source));
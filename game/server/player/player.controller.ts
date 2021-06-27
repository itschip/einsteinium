import { CoreEvents } from '../../shared/events';
import PlayerService from '@server/player';

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
import PlayerService from './player.service';
import { CoreEvents } from '../../shared/events';

on(CoreEvents.PLAYER_JOINING, () => {
  const _source = (global as any).source;

  PlayerService.handleNewPlayer(_source)
    .catch((err) => console.log(`Error when creating a new player. Error: ${err.message}`))
})
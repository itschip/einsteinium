import { WeaponNames } from './../../shared/weapons';
import { DeathDataProps } from './../../shared/types/kill';
import RoundService from '../round/round.service';
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
});

on(CoreEvents.PLAYER_DROPPED, (reason: string) => {
  const _source = global.source;

  PlayerService.handleRemovePlayer(_source);
});

onNet('battlefield:playerDied', (killerId: number) => {
  const _source = global.source;

  console.log('server detected that you are dead');

  console.log('source', _source);
  console.log('killerId', killerId);

  const player = PlayerService.getPlayer(_source);

  emitNet(
    'battlefield:setPlayerToBase',
    _source,
    RoundService.getMap()[player.getTeam()].playerSpawn,
    player.getTeam(),
  );
});

onNet('battlefield:playerKilled', (killerId: number, deathData: DeathDataProps) => {
  const _source = global.source;

  console.log(deathData);

  const killerWeaponHash = deathData.weaponhash;

  console.log('killerWeaponHash', killerWeaponHash);

  const weaponName: string = WeaponNames[deathData.weaponhash];

  console.log('killer id', killerId);
  console.log('killer weapon name', weaponName);

  const player = PlayerService.getPlayer(_source);

  emitNet(
    'battlefield:setPlayerToBase',
    _source,
    RoundService.getMap()[player.getTeam()].playerSpawn,
    player.getTeam(),
  );
});

// exports

global.exports('getPlayer', PlayerService.getPlayer);
global.exports('getIdentifier', PlayerService.getIdentifier);

global.exports('getKills', (source: number) => {
  return PlayerService.getPlayer(source).getKills();
});

global.exports('setKills', (source: number, kills: number) => {
  PlayerService.getPlayer(source).setKills(kills);
});

global.exports('getDeaths', (source: number) => {
  return PlayerService.getPlayer(source).getDeaths();
});

global.exports('setDeaths', (source: number, deaths: number) => {
  PlayerService.getPlayer(source).setDeaths(deaths);
});

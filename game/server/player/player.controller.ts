import { WeaponNames } from './../../shared/weapons';
import { DeathDataProps } from './../../shared/types/kill';
import RoundService from '../round/round.service';
import { CoreEvents, KillEvents, SpawnEvents } from '../../shared/events';
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

onNet(SpawnEvents.PLAYER_DIED, (killerId: number) => {
  const _source = global.source;
  const player = PlayerService.getPlayer(_source);

  emitNet(
    SpawnEvents.PLAYER_TO_BASE,
    _source,
    RoundService.getMap()[player.getTeam()].playerSpawn,
    player.getTeam(),
  );
});

onNet(SpawnEvents.PLAYER_KILLED, (killerId: number, deathData: DeathDataProps) => {
  console.log('player killed');

  const _source = global.source;
  const player = PlayerService.getPlayer(_source);

  const weaponName: string = WeaponNames[deathData.weaponhash];

  emitNet(KillEvents.CREATE_KILLCAM, _source, killerId, weaponName);

  Entity(GetPlayerPed(_source.toString())).state.canBeRevived = true;

  console.log('can be revived', Entity(GetPlayerPed(_source.toString())).state.canBeRevived);

  // if not being revived
  /*setTimeout(() => {
    Entity(GetPlayerPed(_source.toString())).state.canBeRevived = false;

    console.log('can be revived', Entity(GetPlayerPed(_source.toString())).state.canBeRevived)
    emitNet(
      SpawnEvents.PLAYER_TO_BASE,
      _source,
      RoundService.getMap()[player.getTeam()].playerSpawn,
      player.getTeam(),
    );
  }, 5000)*/
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

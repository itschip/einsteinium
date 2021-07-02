import { DeathDataProps } from '../../shared/types/kill';
import {CoreEvents, SpawnEvents} from "../../shared/events";

RegisterCommand('respawn', () => {
  emitNet(SpawnEvents.PLAYER_DIED);
}, false)

on(CoreEvents.ON_PLAYER_DIED, (killerId: number, deathCoords: any[]) => {
  console.log('player died');
  emitNet('battlefield:playerDied', killerId);
});

on(CoreEvents.ON_PLAYER_KILLED, (killerId: number, deathData: DeathDataProps) => {
  console.log('player died');
  emitNet(SpawnEvents.PLAYER_KILLED, killerId, deathData);
});

onNet(
  SpawnEvents.PLAYER_TO_BASE,
  (playerSpawn: { x: number; y: number; z: number }, team: string) => {
    console.log(team);
    console.log('player got yeeted to base');

    global.exports['spawnmanager'].spawnPlayer({
      x: playerSpawn.x,
      y: playerSpawn.y,
      z: playerSpawn.z,
      model: team === 'red' ? 's_m_m_marine_01' : 'mp_m_bogdangoon',
      heading: 260.0,
      skipFade: false,
    });

    global.exports['spawnmanager'].setAutoSpawnCallback(() => {
      global.exports['spawnmanager'].spawnPlayer(
        {
          x: playerSpawn.x,
          y: playerSpawn.y,
          z: playerSpawn.z,
          heading: 260.0,
          model: team === 'red' ? 's_m_m_marine_01' : 'mp_m_bogdangoon',
          skipFade: false,
        },
        () => {
          ClearPedBloodDamage(PlayerPedId());
        },
      );
    });
  },
);

global.exports['spawnmanager'].setAutoSpawn(false);

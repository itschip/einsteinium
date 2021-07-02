import { DeathDataProps } from '../../shared/types/kill';

RegisterCommand('respawn', () => {
  emitNet('battlefield:playerDied');
}, false)

on('baseevents:onPlayerDied', (killerId: number, deathCoords: any[]) => {
  console.log('player died');
  emitNet('battlefield:playerDied', killerId);
});

on('baseevents:onPlayerKilled', (killerId: number, deathData: DeathDataProps) => {
  console.log('player died');
  emitNet('battlefield:playerKilled', killerId, deathData);
});

onNet(
  'battlefield:setPlayerToBase',
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

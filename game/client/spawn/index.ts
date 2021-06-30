setImmediate(() => {
  console.log('do you even work?');
});

global.exports['spawnmanager'].spawnPlayer({
  x: -1162.49,
  y: -2977.33,
  z: 13.94,
  heading: 200.0,
  skidFade: true,
});

on('baseevents:onPlayerDied', (killerId: number, deathCoords: any[]) => {
  console.log('player died');
  emitNet('battlefield:respawnPlayer');
});

on('baseevents:onPlayerKilled', (killerId: number, deathCoords: any[]) => {
  console.log('player died');
  emitNet('battlefield:respawnPlayer');
});

onNet('battlefield:setPlayerToBase', (playerSpawn: { x: number; y: number; z: number }) => {
  console.log('player got yeeted to base');

  global.exports['spawnmanager'].setAutoSpawnCallback(() => {
    global.exports['spawnmanager'].spawnPlayer({
      x: playerSpawn.x,
      y: playerSpawn.y,
      z: playerSpawn.z,
      heading: 260.0,
      skipFade: false,
    });
  });
});

global.exports['spawnmanager'].setAutoSpawn(true);

import World from "../lib/world";
import FiveM from "../lib/fivem";

/*
setImmediate(() => {
  RequestModel(GetHashKey('sh_conquest_flag_blue'))
  RequestModel(GetHashKey('sh_conquest_flag_red'))
  RequestModel(GetHashKey('sh_conquest_flag_white'))
})
*/

RegisterCommand('carxd', async (src: number, args: string[]) => {
  console.log('xdxdxxdxdxddxd')
  const [x, y, z] = GetEntityCoords(PlayerPedId(), false);
  console.log(x, y, z)
  const objectHash = GetHashKey('sh_conquest_flag_blue');

  await World.createVehicle(args[0], [x,y, z]);

  /*RequestModel(objectHash);

  while (!HasModelLoaded(objectHash)) {
    await FiveM.Delay(100)
    console.log('waiting sxx')
  }

  CreateObject(objectHash, x, y, z, true, true, false);*/

  /*const flag = await World.createObject('sh_conquest_flag_white', [x, y, z]);*/
  /*console.log(flag);*/
}, false)

RegisterCommand('flagprop', async (src: number, args: string[]) => {
  const [x, y, z] = GetEntityCoords(PlayerPedId(), false);
  console.log(x, y, z)

  const [, zCoord] = GetGroundZFor_3dCoord(x ,y, z, false);

  const flag = await World.createObject('sh_conquest_flag_white', [x, y, zCoord]);
  console.log('falg prop', flag)
  FreezeEntityPosition(flag, true);
  console.log(flag);
}, false)
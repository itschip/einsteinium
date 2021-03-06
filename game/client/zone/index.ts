import World from "../lib/world";
import FiveM from "../lib/fivem";
import {ObjectivesProps} from "../../shared/types/resource";

setImmediate(() => {
  RequestModel(GetHashKey('sh_conquest_flag_blue'))
  RequestModel(GetHashKey('sh_conquest_flag_red'))
  RequestModel(GetHashKey('sh_conquest_flag_white'))
})

RegisterCommand('carxd', async (src: number, args: string[]) => {
  console.log('xdxdxxdxdxddxd')
  const [x, y, z] = GetEntityCoords(PlayerPedId(), false);
  console.log(x, y, z)

  await World.createVehicle(args[0], [x,y, z], true);

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

onNet('battlefield:zone:setupFlags', async (objectives: ObjectivesProps[]) => {
  for (const objective of objectives) {
    console.log('flag coords', objective.coords)
    const [, zCoord] = GetGroundZFor_3dCoord(objective.coords[0], objective.coords[1], objective.coords[2], false);

    const flag = await World.createObject('sh_conquest_flag_white', [objective.coords[0], objective.coords[1], zCoord]);
    console.log('falg prop', flag)
    FreezeEntityPosition(flag, true);
  }
})
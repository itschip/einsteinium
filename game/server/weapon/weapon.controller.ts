import { ProjectileProps } from './../../shared/types/weapon';
import WeaponService from './weapon.service';
import FiveM from '../lib/fivem';

RegisterCommand(
  'giveweapon',
  (src: number, args: string[], raw: string) => {
    WeaponService.giveWeapon(src, args[0]);
  },
  false,
);

on('startProjectileEvent', async (sender: number, data: ProjectileProps) => {
  console.log('sender', sender);
  console.log('data', data);

  console.log('entity owner', NetworkGetEntityFromNetworkId(data.ownerId));

  const playerUsedCountermeasures = Entity(NetworkGetEntityFromNetworkId(data.targetEntity)).state.usedCountermeasures

 /* while (!playerUsedCountermeasures) {
    await FiveM.Delay(10);
  }*/

  /*console.log('did player used countermeaures', playerUsedCountermeasures);*/
  emitNet('battlefield:vehicle:explodeProjectile', sender, data.weaponHash);

  /*if (playerUsedCountermeasures) {
  }*/
});

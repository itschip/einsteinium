import FiveM from '../lib/fivem';
import { shootFlare } from './functions';

RegisterKeyMapping('+countermeasures', 'Deploys countermeasures', 'keyboard', 'x');
RegisterCommand(
  '+countermeasures',
  async () => {
    let counterTick: any = null;
    let counterMeasures = 0;

    const playerJet = GetVehiclePedIsIn(PlayerPedId(), false);
    emitNet('battlefield:vehicle:updateCountermeasures', VehToNet(playerJet));


    const DICT = 'scr_indep_fireworks';
    const PARTICLE_NAME = 'scr_indep_firework_shotburst';

    counterTick = setTick(async () => {
      RequestModel(GetHashKey('weapon_flaregun'));
      RequestWeaponAsset(GetHashKey('weapon_flaregun'), 31, 26);

      counterMeasures++;
      console.log('counters released', counterMeasures);

      SetVehicleCanBeLockedOn(playerJet, false, false);

      if (IsPedInAnyPlane(PlayerPedId())) {
        const rudder = GetWorldPositionOfEntityBone(
          playerJet,
          GetEntityBoneIndexByName(playerJet, 'rudder'),
        );

        const flareOffsetRight = GetOffsetFromEntityInWorldCoords(playerJet, 5.0, -4.0, -0.6);
        const flareOffsetLeft = GetOffsetFromEntityInWorldCoords(playerJet, -5.0, -4.0, -0.6);
        const flareOffsetRight2 = GetOffsetFromEntityInWorldCoords(playerJet, 2.0, -4.0, -0.3);
        const flareOffsetLeft2 = GetOffsetFromEntityInWorldCoords(playerJet, -2.0, -4.0, -0.3);

        /*  SetVehicleCanBeLockedOn(playerJet, false, false); */
        /* SetEntityInvincible(playerJet, true); */

        shootFlare(playerJet, rudder, flareOffsetRight, -8.0);
        shootFlare(playerJet, rudder, flareOffsetLeft, -8.0);
        shootFlare(playerJet, rudder, flareOffsetRight2, -8.0);
        shootFlare(playerJet, rudder, flareOffsetLeft2, -8.0);
      } else if (IsPedInAnyHeli(PlayerPedId())) {
        // if in heli
        const rudder = GetEntityCoords(playerJet, false);

        const flareOffsetRight = GetOffsetFromEntityInWorldCoords(playerJet, 6.0, -1.0, -2.0);
        const flareOffsetLeft = GetOffsetFromEntityInWorldCoords(playerJet, -6.0, -1.0, -2.0);
        const flareOffsetRight2 = GetOffsetFromEntityInWorldCoords(playerJet, 3.0, -1.0, -2.0);
        const flareOffsetLeft2 = GetOffsetFromEntityInWorldCoords(playerJet, -3.0, -1.0, -2.0);

        shootFlare(playerJet, rudder, flareOffsetRight, -4.0);
        shootFlare(playerJet, rudder, flareOffsetLeft, -4.0);
        shootFlare(playerJet, rudder, flareOffsetRight2, -4.0);
        shootFlare(playerJet, rudder, flareOffsetLeft2, -4.0);
      }

      SetModelAsNoLongerNeeded(GetHashKey('weapon_flaregun'));

      if (counterMeasures === 6) {
        clearTick(counterTick);
        SetVehicleCanBeLockedOn(playerJet, true, false);
      }

      await FiveM.Delay(500);
    });
  },
  false,
);

onNet('battlefield:vehicle:explodeProjectile', async (weaponHash: number) => {
  console.log('projectile', weaponHash);

  /*await FiveM.Delay(1000);*/
  /*ExplodeProjectiles(PlayerPedId(), weaponHash, false);*/
  /*RemoveAllProjectilesOfType(weaponHash, false);*/
});

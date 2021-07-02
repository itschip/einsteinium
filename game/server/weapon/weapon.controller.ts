import { ProjectileProps } from './../../shared/types/weapon';
import WeaponService from './weapon.service';
import FiveM from '../lib/fivem';
import { config } from '../server';

RegisterCommand(
  'giveweapon',
  (src: number, args: string[], raw: string) => {
    WeaponService.giveWeapon(src, args[0]);
  },
  false,
);

RegisterCommand(
  'class',
  (src: number, args: any[], raw: string) => {
    RemoveAllPedWeapons(GetPlayerPed(src.toString()), false);

    const selectedClass: 'medic' | 'engineer' = args[0];

    const loadout = config.loadouts[selectedClass];

    for (const [key, value] of Object.entries(loadout)) {
      console.log(key, value);
      WeaponService.giveWeapon(src, value)
    }
  },
  false,
);
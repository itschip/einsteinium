import { ConfigProps } from '../shared/types/resource';
export const config: ConfigProps = JSON.parse(
  LoadResourceFile(GetCurrentResourceName(), 'game/shared/config.json'),
);

import './player/player.controller';
import './team/team.controller';
import './weapon/weapon.controller';
import './airdrop/airdrop.controller';
import './round/round.controller';
import './vehicle/vehicle.controller';

RegisterCommand(
  'getcoords',
  (src: number) => {
    console.log('coords', GetEntityCoords(GetPlayerPed(src.toString())));
  },
  false,
);

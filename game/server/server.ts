import './player/player.controller';
import './team/team.controller';
import './weapon/weapon.controller';
import './airdrop/airdrop.controller';

import { ConfigProps } from '../shared/types/resource';

export const config: ConfigProps = JSON.parse(
  LoadResourceFile(GetCurrentResourceName(), 'game/shared/config.json'),
);

RegisterCommand(
  'getcoords',
  (src: number) => {
    console.log('coords', GetEntityCoords(GetPlayerPed(src.toString())));
  },
  false,
);

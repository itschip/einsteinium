import { ConfigProps } from '../shared/types/resource';

export const config: ConfigProps = JSON.parse(
  LoadResourceFile(GetCurrentResourceName(), 'game/shared/config.json'),
);

SetCanAttackFriendly(PlayerPedId(), true, false);
NetworkSetFriendlyFireOption(true);

import './zone';
import './airdrop';
import './spawn';
import './vehicles';

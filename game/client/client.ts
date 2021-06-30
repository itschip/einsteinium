import './zone';
import { ConfigProps } from '../shared/types/resource';

export const config: ConfigProps = JSON.parse(
  LoadResourceFile(GetCurrentResourceName(), 'game/shared/config.json'),
);

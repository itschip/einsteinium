import { MapProps } from '../../shared/types/resource';
import { config } from '../server';

class _RoundService {
  private _map: MapProps;

  constructor() {
    console.log('Round service started');
    this.selectRandomMap();

    console.log(this._map);
  }

  selectRandomMap() {
    if (config.maps) {
      const randomIndex = Math.floor(Math.random() * config.maps.length);

      this._map = config.maps[randomIndex];
    } else {
      console.log('failed to get config maps');
    }
  }

  getMap(): MapProps {
    return this._map;
  }
}

const RoundService = new _RoundService();

export default RoundService;

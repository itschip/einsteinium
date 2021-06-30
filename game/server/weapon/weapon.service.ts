import WeaponDB, { _WeaponDB } from './weapon.db';

class _WeaponService {
  private readonly weaponDB: _WeaponDB;

  constructor() {
    console.log('Weapon service started');
    this.weaponDB = WeaponDB;
  }

  giveWeapon(src: number, weapon: string) {
    const weaponHash = GetHashKey(weapon);

    GiveWeaponToPed(GetPlayerPed(src.toString()), weaponHash, 999, true, false);
  }
}

const WeaponService = new _WeaponService();

export default WeaponService;

export function shootFlare(entity: number, entityCoords: number[], offset: number[], speed: number) {
  ShootSingleBulletBetweenCoordsIgnoreEntity(
    entityCoords[0],
    entityCoords[1],
    entityCoords[2],
    offset[0],
    offset[1],
    offset[2],
    0,
    true,
    GetHashKey('weapon_flaregun'),
    PlayerPedId(),
    true,
    false,
    speed,
    entity,
  );
}
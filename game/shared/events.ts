export enum CoreEvents {
  /**
   * The default cfx playerJoining event
   */
  PLAYER_JOINING = 'playerJoining',

  /**
   * The default cfx playerDropped event
   */
  PLAYER_DROPPED = 'playerDropped',

  /**
   * The default cfx playerConnecting event
   */
  PLAYER_CONNECTING = 'playerConnecting'
}

export enum SpawnEvents {
  SPAWN_PLAYER = 'battlefield:spawnPlayer',
  GET_LOADOUT = 'battlefield:getPlayerLoadout'
}

export enum GameEvents {
  CREATE_ZONES = 'battlefield:createZones',
  ASSIGN_PLAYER_TO_TEAM = 'battlefield:assignPlayerToTeam'
}
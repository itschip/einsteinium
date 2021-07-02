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
  PLAYER_CONNECTING = 'playerConnecting',

  /**
   * The default cfx onPlayerDied event
   */
  ON_PLAYER_DIED = 'baseevents:onPlayerDied',

  /**
   * The default cfx onPlayerKilled event
   */
  ON_PLAYER_KILLED = 'baseevents:onPlayerKilled'
}

export enum SpawnEvents {
  PLAYER_KILLED = 'battlefield:playerKilled',
  PLAYER_DIED = 'battlefield:playerDied',
  PLAYER_TO_BASE = 'battlefield:setPlayerToBase'
}

export enum KillEvents {
  CREATE_KILLCAM = 'battlefield:kill:createKillCam'
}
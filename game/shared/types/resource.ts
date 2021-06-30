export interface ConfigProps {
  maps: MapProps[];
}

export interface MapProps {
  name: string;
  blue: MapTeamProps;
  red: MapTeamProps;
}

export interface MapTeamProps {
  playerSpawn: { x: number; y: number; z: number };
}

export interface ConfigProps {
  maps: MapProps[];
  loadouts: LoadoutProps
}

export interface MapProps {
  name: string;
  objectives: ObjectivesProps[]
  blue: MapTeamProps;
  red: MapTeamProps;
}

export interface MapTeamProps {
  playerSpawn: { x: number; y: number; z: number };
}

export interface LoadoutProps {
  medic: {
    primary: string;
    secondary: string;
  };
  engineer: {
    primary: string;
    secondary: string;
  }
}

export interface ObjectivesProps {
  name: string;
  coords: number[]
}

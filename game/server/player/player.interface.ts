export interface PlayerMapProps {
  source: number;
  identifier: string;
  username: string;
}

export interface PlayerProps {
  source: number;
  identifier: string;
  username: string;
  team: 'red' | 'blue' | null;
  kills: number;
  deaths: number;
}
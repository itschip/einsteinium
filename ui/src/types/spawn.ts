export interface SpawnProps {
  capturedFlags: number;
  vehiclesAvailable: string[];
  flags: FlagProps[];
}

export type FlagProps = {
  name: string;
  status: string;
};

import { PlayerProps } from './player.interface';

export class Player {
  private readonly _source: number;
  private readonly _identifier: string;
  private readonly _username: string;

  constructor({ source, identifier, username }: PlayerProps) {
    this._source = source;
    this._identifier = identifier;
    this._username = username;
  }

  getIdentifier(): string {
    return this._identifier;
  }

  getUsername(): string {
    return this._username;
  }
}
import { PlayerProps } from './player.interface';
import PlayerDB, { _PlayerDB } from './player.db';

export class Player {
  private readonly _source: number;
  private readonly _identifier: string;
  private readonly _username: string;
  private readonly playerDB: _PlayerDB;

  constructor({ source, identifier, username }: PlayerProps) {
    this._source = source;
    this._identifier = identifier;
    this._username = username;

    this.playerDB = PlayerDB;
  }

  getIdentifier(): string {
    return this._identifier;
  }

  getUsername(): string {
    return this._username;
  }

  async getLevel(): Promise<number> {
    return await this.playerDB.getPlayerLevel(this._identifier);
  }
}

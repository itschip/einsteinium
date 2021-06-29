import { PlayerProps } from './player.interface';
import PlayerDB, { _PlayerDB } from './player.db';

export class Player {
  private readonly _source: number;
  private readonly _identifier: string;
  private readonly _username: string;
  private _kills: number;
  private _deaths: number;
  private readonly playerDB: _PlayerDB;

  constructor({ source, identifier, username, kills, deaths }: PlayerProps) {
    this._source = source;
    this._identifier = identifier;
    this._username = username;
    this._kills = kills;
    this._deaths = deaths;

    this.playerDB = PlayerDB;
  }

  getIdentifier(): string {
    return this._identifier;
  }

  getUsername(): string {
    return this._username;
  }

  getKills(): number {
    return this._kills
  }

  setKills(kills: number): void {
    this._kills = this._kills + kills;
  }

  getDeaths(): number {
    return this._deaths;
  }

  setDeaths(deaths: number) {
    this._deaths = this._deaths + deaths;
  }

  /*async getLevel(): Promise<number> {
    return await this.playerDB.getPlayerLevel(this._identifier);
  }*/
}

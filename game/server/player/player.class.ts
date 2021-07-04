import { PlayerProps } from './player.interface';
import PlayerDB, { _PlayerDB } from './player.db';

export class Player {
  private readonly _source: number;
  private readonly _identifier: string;
  private readonly _username: string;
  private _kills: number;
  private _deaths: number;
  private _selectedClass: string;
  _team: 'red' | 'blue' | null;
  private readonly playerDB: _PlayerDB;

  constructor({ source, identifier, username, kills, deaths, team }: PlayerProps) {
    this._source = source;
    this._identifier = identifier;
    this._username = username;
    this._kills = kills;
    this._deaths = deaths;
    this._team = team;
    this._selectedClass = null;

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

  getTeam(): 'red' | 'blue' | null {
    return this._team;
  }

  setTeam(team: 'red' | 'blue') {
    this._team = team;
  }

  getClass(): string | null{
    return this._selectedClass;
  }

  setClass(_class: string): void {
    this._selectedClass = _class;
  }
}

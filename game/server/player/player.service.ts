import { Player } from './player.class';
import { getGameLicense } from '../utils/getGameLicense'
import PlayerDB, { _PlayerDB } from './player.db';

class _PlayerService {
  private playerSourceMap: Map<number, Player>
  private playersIdentifierMap: Map<string, Player>;
  private readonly playerDB: _PlayerDB;

  constructor() {
    console.log('Player service started');
    this.playerSourceMap = new Map<number, Player>();
    this.playersIdentifierMap = new Map<string, Player>();

    this.playerDB = PlayerDB;
  }

  /**
   * Gets the player from source map
   * @param source
   */
  getPlayer(source: number): Player | null {
    const player = this.playerSourceMap.get(source);
    if (!player) return null;
    return player;
  }

  /**
   * Gets the player from identifier map
   * @param identifier
   */
  getPlayerByIdentifier(identifier: string): Player | null {
    const player = this.playersIdentifierMap.get(identifier);
    if (!player) return null;
    return player;
  }

  getIdentifier(source: number): string | null {
    const identifier = this.getPlayer(source).getIdentifier();
    if (!identifier) return null
    return identifier;
  }

  /**
   * Adds the player to both the source and identifier map
   * @param source
   * @param player
   */
  handleAddPlayerToMap(source: number, player: Player) {
    this.playerSourceMap.set(source, player)
  }

  private removePlayerFromMap(source: number) {
    const Player = this.getPlayer(source);

    this.playerSourceMap.delete(source)
    this.playersIdentifierMap.delete(Player.getIdentifier());
  }

  /**
   * Creates a new player in the map and updates the database
   * @param source
   */
  async handleNewPlayer(source: number) {
    const identifier = getGameLicense(source);

    const username = GetPlayerName(source.toString());

    await this.playerDB.createPlayer(identifier, username);
    const player = new Player({ source, username, identifier })


    this.handleAddPlayerToMap(source, player);
  }

  async handleDeletePlayer(source: number) {
    // FIXME: Might not be most ideal way if a player is offline heh
    const Player = this.getPlayer(source);
    await this.playerDB.deletePlayer(Player.getIdentifier());
  }

  handleRemovePlayer(source: number) {
    this.removePlayerFromMap(source)
  }

}

const PlayerService = new _PlayerService();

export default PlayerService;
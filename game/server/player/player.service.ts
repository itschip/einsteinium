import { PlayerMapProps } from './player.interface';
import { Player } from './player.class';
import { getGameLicense } from '../utils/getGameLicense'

class _PlayerService {
  private playerSourceMap: Map<number, Player>
  private playersIdentifierMap: Map<string, Player>;

  constructor() {
    console.log('Player service started');
    this.playerSourceMap = new Map<number, Player>();
    this.playersIdentifierMap = new Map<string, Player>();
  }

  getPlayer(source: number): Player | null {
    const player = this.playerSourceMap.get(source);
    if (!player) return null;
    return player;
  }

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

  addPlayerToMap(source: number, player: Player) {
    this.playerSourceMap.set(source, player)
  }

  async handleNewPlayer(source: number) {
    // FIXME: Create a identifier function
    
    const identifier = getGameLicense(source);

    const username = GetPlayerName(source.toString());

    const player = new Player({ source, username, identifier })

    this.addPlayerToMap(source, player);
  }


}

const PlayerService = new _PlayerService();

export default PlayerService;
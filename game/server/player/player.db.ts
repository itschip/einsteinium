export class _PlayerDB {
  async getPlayerLevel(identifier: string): Promise<number> {
    return 0;
  }

  async getExtraInformation(identifier: string): Promise<void> {
    // get some 'xd info' about players
  }
}

const PlayerDB = new _PlayerDB();

export default PlayerDB;
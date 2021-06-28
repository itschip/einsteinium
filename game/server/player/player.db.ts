import { db } from '@server/db';

export class _PlayerDB {
  async createPlayer(identifier: string, username: string): Promise<void> {
    const query = `INSERT INTO players (identifier, username) VALUES (?, ?)`
    await db.query(query, [identifier, username])
  }

  async deletePlayer(identifier: string): Promise<void> {
    const query = `DELETE FROM players WHERE identifier = ?`
    await db.query(query, [identifier]);
  }

  async getPlayerLevel(identifier: string): Promise<number> {
    /*const query = `SELECT * FROM players`
    const [results] = await db.query(query, [identifier])*/
    return 0;
  }

  async getExtraInformation(identifier: string): Promise<void> {
    // get some 'xd info' about players
  }
}

const PlayerDB = new _PlayerDB();

export default PlayerDB;
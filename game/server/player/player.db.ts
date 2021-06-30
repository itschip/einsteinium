import { db } from '../database/db';

export class _PlayerDB {
  async createPlayer(identifier: string, username: string): Promise<void> {
    const query = `INSERT INTO players (identifier, username) VALUES (?, ?)`
    await db.query(query, [identifier, username])
  }

  async deletePlayer(identifier: string): Promise<void> {
    const query = `DELETE FROM players WHERE identifier = ?`
    await db.query(query, [identifier]);
  }
}

const PlayerDB = new _PlayerDB();

export default PlayerDB;
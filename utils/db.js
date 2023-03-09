import { MongoClient, mongodb } from 'mongodb';
import Collection from 'mongodb/lib/collection';
import envLoader from './env_loader';


class DBClient {
  constructor() {
    envLoader();
    const h = process.env.DB_HOST || 'localhost';
    const p = process.env.DB_PORT || 27017;
    const db = process.env.DB_DATABASE || 'files_manager';
    const dburl = `mongodb://${h}:${p}/${db}`;

    this.client = new MongoClient(dburl, { useUnifiedTopology: true });
    this.client.connect();
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    return this.client.db().collection('users').countDocuments();
  }

  async nbFiles() {
    return this.client.db().collection('files').countDocuments();
  }

  async usersCollection() {
    return this.client.db().collection('users');
  }

  async filesCollection() {
    return this.client.db().collection('files');
  }
}

export const dbClient = new DBClient();
export default dbClient;

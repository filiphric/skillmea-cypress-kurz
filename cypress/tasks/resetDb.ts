import * as path from 'path';
import * as fs from 'fs';

const dbPath = path.resolve('./trelloapp/backend/data/database.json')

export const resetDb = () => {

  const emptyDb = {
    "boards": [],
    "cards": [],
    "users": [],
    "lists": []
  }

  fs.writeFileSync(dbPath, JSON.stringify(emptyDb, null, 2))

  return emptyDb;

};
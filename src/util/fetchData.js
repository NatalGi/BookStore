import db from '../data/db.json';

export default function fetchFromFile() {
  return new Promise((resolve, reject) => {
    resolve(db);
  });
}

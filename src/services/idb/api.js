import openDB from './index';

const READ_WRITE = 'readwrite';

export default class IDBApi {
  static add(data) {
    return openDB().then(
      (db) =>
        new Promise((resolve, reject) => {
          const tx = db.transaction(this.store, READ_WRITE);
          const customers = tx.objectStore(this.store);
          const request = customers.add(data);
          request.onerror = (error) => reject(error);

          request.onsuccess = ({ target: { result } }) => {
            resolve(result);
          };
        })
    );
  }

  static getAll() {
    return openDB().then(
      (db) =>
        new Promise((resolve, reject) => {
          const tx = db.transaction(this.store);
          const customers = tx.objectStore(this.store);
          const request = customers.getAll();

          request.onerror = (error) => reject(error);

          request.onsuccess = ({ target: { result } }) => {
            resolve(result);
          };
        })
    );
  }

  static delete(key) {
    return openDB().then(
      (db) =>
        new Promise((resolve, reject) => {
          const tx = db.transaction(this.store, READ_WRITE);
          const customers = tx.objectStore(this.store);
          const request = customers.delete(key);

          request.onerror = (error) => reject(error);

          request.onsuccess = ({ target: { result } }) => {
            resolve(result);
          };
        })
    );
  }
}

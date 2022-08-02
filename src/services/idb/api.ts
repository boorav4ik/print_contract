import openDB from './index';

const READ_WRITE = 'readwrite';

export default class IDBApi {
  static store: string;

  static add(data: Object) {
    return openDB().then(
      (db) =>
        new Promise((resolve, reject) => {
          const tx = db.transaction(this.store, READ_WRITE);
          const store = tx.objectStore(this.store);
          const request = store.add(data);
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
          const store = tx.objectStore(this.store);
          const request = store.getAll();
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
          const store = tx.objectStore(this.store);
          const request = store.delete(key);

          request.onerror = (error) => reject(error);

          request.onsuccess = ({ target: { result } }) => {
            resolve(result);
          };
        })
    );
  }

  static get(id: number) {
    return openDB().then(
      (db) =>
        new Promise((resolve) => {
          const tx = db.transaction(this.store);
          const store = tx.objectStore(this.store);
          const request = store.get(id);

          request.onsuccess = ({ target: { result } }): void => resolve(result);
        })
    );
  }
}

export default function createIndexedDB(name, version, schema) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(name, version);

    request.onerror = (event) => reject(event);

    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      function createObjectStore([keyPath, { options = {}, indexes = {} }]) {
        const store = db.createObjectStore(keyPath, options);
        Object.entries(indexes).forEach(([key, value]) => {
          store.createIndex(key, value.keyPath, value.options);
        });
      }

      Object.entries(schema).forEach(createObjectStore);
      resolve(db);
    };
  });
}

let db;

const dbName = 'darimedDB';

// const initIndexedDB = () => {
const request = indexedDB.open(dbName, 1);

request.onerror = (event) => {
  console.log(event);
};

request.onsuccess = (event) => {
  console.log('!!!!');
  db = request.result;
  db.onversionchange = () => {
    db.close();
    alert('База данных устарела, пожалуйста, перезагрузите страницу.');
  };
};

request.onupgradeneeded = (event) => {
  db = event.target.result;
  const customers = db.createObjectStore('customers', {
    keyPath: 'id',
    autoIncrement: true,
  });
  customers.createIndex('surname', 'surname', { unique: false });
  customers.createIndex('name', 'name', { unique: false });
  customers.createIndex('secondName', 'secondName', { unique: false });
  customers.createIndex('phone', 'phone', { unique: true });
  customers.createIndex('address', 'address', { unique: false });
  customers.createIndex('email', 'email', { unique: true });
  customers.createIndex('fullName', ['surname', 'name', 'secondName'], {
    multiEntry: true,
  });
  // customers.createIndex('externalId', 'externalId', { unique: true });

  const services = db.createObjectStore('services', {
    keyPath: 'id',
    autoIncrement: true,
  });
  services.createIndex('name', 'name', { unique: true });
  services.createIndex('cost', 'cost', { unique: false });
  // services.createIndex('externalId', 'externalId', { unique: true });

  const records = db.createObjectStore('records', {
    keyPath: 'id',
    autoIncrement: true,
  });
  records.createIndex('date', 'date', { unique: false });
  records.createIndex('customerId', 'customerId', { unique: false });
  records.createIndex('services', 'services', { multiEntry: true });
  records.createIndex('description', 'description', { unique: false });

  // customerData.forEach((data) => objectStore.add(data));
  // transaction = db.transaction(dbName);
};
// };

export default request;

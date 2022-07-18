const customerData = [
  { ssn: '444-44-4444', name: 'Bill', age: 35, email: 'bill@company.com' },
  { ssn: '555-55-5555', name: 'Donna', age: 32, email: 'donna@home.org' },
];

const dbName = 'darimedDB';

const addCustomers = () => {
  const request = indexedDB.open(dbName, 1);

  request.onerror = (event) => {
    console.log(event);
  };

  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    const objectStore = db.createObjectStore('customers', { keyPath: 'ssn' });
    objectStore.createIndex('name', 'name', { unique: false });
    objectStore.createIndex('email', 'email', { unique: true });
    customerData.forEach((data) => objectStore.add(data));
  };
};

export default addCustomers;

// const objectStore = db.transaction('toDoList').objectStore('toDoList');
// import request from './indexedDB';
import openDB from './idb';

function addCustomer(data) {
  console.log({ data });
  openDB()
    .then((db) => {
      const tx = db.transaction('customers', IDBTransaction.READ_WRITE);
      const customers = tx.objectStore('customers');
      const request = customers.add(data);

      return request;
    })
    .catch(console.log);
  // const customers = dbTransaction().transaction.objectStore('customers');
  // const request = customers.add(data);
  // request.onsuccess = function onSuccess(event) {
  //   // event.target.result == customerData[i].ssn;
  //   console.log(event);
  // };
  // return 'ok';
}

export default addCustomer;

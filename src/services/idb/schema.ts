export default {
  customers: {
    options: { keyPath: 'id', autoIncrement: true },
    indexes: {
      surname: { keyPath: 'surname', options: { unique: false } },
      name: { keyPath: 'name', options: { unique: false } },
      secondName: { keyPath: 'secondName', options: { unique: false } },
      phone: { keyPath: 'phone', options: { unique: true } },
      address: { keyPath: 'address', options: { unique: false } },
      email: { keyPath: 'email', options: { unique: false } },
      // fullname: {
      // keyPath: ['surname', 'name', 'secondName'],
      // options: { multiEntry: true },
      // },
    },
  },
  services: {
    options: { keyPath: 'id', autoIncrement: true },
    indexes: {
      name: { keyPath: 'name', options: { unique: true } },
      cost: { keyPath: 'cost', options: { unique: false }, type: 'number' },
    },
  },
  records: {
    options: { keyPath: 'id', autoIncrement: true },
    indexes: {
      date: { keyPath: 'date', options: { unique: false } },
      customerId: { keyPath: 'customerId', options: { unique: false } },
      services: {
        keyPath: 'services',
        options: { unique: false },
        // options: { multiEntry: true },
      },
      description: { keyPath: 'description', options: { unique: false } },
    },
  },
};

export const customers = {
  options: { keyPath: 'id', autoIncrement: true },
  indexes: {
    surname: {
      keyPath: 'surname',
      options: { unique: false },
      required: true,
      label: 'Фамилия',
    },
    name: {
      keyPath: 'name',
      options: { unique: false },
      required: true,
      label: 'Имя',
    },
    secondName: {
      keyPath: 'secondName',
      options: { unique: false },
      required: true,
      label: 'Отчество',
    },
    phone: {
      keyPath: 'phone',
      options: { unique: true },
      required: true,
      type: 'tel',
      label: 'Номер телефона',
    },
    address: {
      keyPath: 'address',
      options: { unique: false },
      required: true,
      label: 'Адрес',
    },
    email: {
      keyPath: 'email',
      options: { unique: false },
      required: false,
      type: 'email',
      label: 'Е-mail',
    },
    pasportID: {
      keyPath: 'pasportId',
      options: { unique: true },
      required: true,
      label: ' Серия и номер паспорта',
    },
    pasportDateIssue: {
      keyPath: 'pasportDateIssue',
      options: { unique: false },
      required: true,
      type: 'date',
      label: 'Дата выдачи',
    },
    pasportDepartment: {
      keyPath: 'pasportDepartment',
      options: { unique: false },
      required: true,
      label: 'Кем выдан',
    },
  },
};

export const services = {
  options: { keyPath: 'id', autoIncrement: true },
  indexes: {
    name: { keyPath: 'name', options: { unique: true } },
    cost: { keyPath: 'cost', options: { unique: false } },
  },
};

export const records = {
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
};

export default { customers, services, records };

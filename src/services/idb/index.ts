import schema from './schema';
import createIndexedDB from './createDB';

const openDB = () => createIndexedDB('DarimedDB', 1, schema);

export default openDB;

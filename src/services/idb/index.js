import schema from './schema';
import createIndexedDB from './createDB';

export default () => createIndexedDB('DarimedDB', 1, schema);

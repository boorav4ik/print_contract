import schema from './schema';
import createIndexedDB from './createDB';

export default function openDB() {
  return createIndexedDB('DarimedDB', 1, schema);
}

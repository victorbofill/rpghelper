// This will grab each key/value pair in a database object and return an object without any code that isn't needed to be displayed
export const parseDatabaseObject = databaseObject => {
  const parsedDatabaseObject = {};
  Object.keys(databaseObject).map((key, index) => {
    if(key === '__v' || key === '_id') return;
    const value = Object.values(databaseObject)[index];
    if(typeof value === 'object') return;
    parsedDatabaseObject[key] = value;
  });
  return parsedDatabaseObject;
};
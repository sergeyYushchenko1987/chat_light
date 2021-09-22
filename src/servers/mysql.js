const mysql = require('mysql');
const config = require('config');

const dataBaseConfig = config.get('mySqlConfig');

const connection = mysql.createConnection(dataBaseConfig);
connection.connect((error) => {
  if (error) {
    return;
  }
  return connection;
});
module.exports = connection;

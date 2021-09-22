const connection = require('@servers/mySql');
const queries = require('@services/queries');

exports.executeQuery = (params, subject, method, callbackResults) => {
  const query = queries[subject][method];
  connection.query(query, params, (error, results) => {
    if (error) {
      return error;
    }
    callbackResults(results);
  });
};

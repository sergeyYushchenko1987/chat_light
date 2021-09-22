const { executeQuery } = require('@services/modelsService');

exports.addModel = (params) => {
  const { name, message, date, time } = params;
  executeQuery([message, name, date, time], 'socket', 'add', (results) => {});
};
exports.getAllModel = (callbackResults) => {
  executeQuery([], 'socket', 'getAll', (results) => {
    callbackResults(results);
  });
};

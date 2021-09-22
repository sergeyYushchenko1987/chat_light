const { addModel, getAllModel } = require('@models/socketModel');

exports.onConnection = (socket) => {
  getAllModel((results) => {
    socket.emit('get messages', results);
  });
  socket.on('new message', (msg) => {
    socket.broadcast.emit('new message', msg);
    addModel(msg);
  });
};

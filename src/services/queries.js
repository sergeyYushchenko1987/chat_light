module.exports = {
  socket: {
    add: 'INSERT INTO messages VALUES(null,?,?,?,?)',
    getAll: 'SELECT * FROM messages',
  },
};

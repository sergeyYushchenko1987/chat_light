require('module-alias/register');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const config = require('config');
const { onConnection } = require('@services/socketService');
const path = require('path');

const app = express();

const httpServer = http.createServer(app);
const io = new Server(httpServer);
const PORT = config.get('const.port');

app.use(express.static(`${__dirname}/public`));
app.set('view engine', 'ejs');
app.set('views', path.resolve(`${__dirname}/src`, 'views'));

app.get('/', (request, response) => {
  response.render('index');
});
io.on('connection', onConnection);

httpServer.listen(PORT, () => {
  console.log(`server is listening ${PORT}`);
});

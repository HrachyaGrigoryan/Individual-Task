const server = require('http').createServer();
const io = require('socket.io')(server);

const users = {};

io.on('connection', client => {
  client.on('new-user', name => {
    users[client.id] = name
    client.broadcast.emit('user-connected', name);
  });
  client.on('send-message', message => {
    client.broadcast.emit('chat-message', { message: message, name: users[client.id] });
  });
  client.on('disconnect', () => {
    client.broadcast.emit('disconnected', users[client.id]);
    delete users[client.id]
  });
});
server.listen(3000);

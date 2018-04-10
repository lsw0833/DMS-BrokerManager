var mosca = require('mosca');

var settings = {
  port: 1883
};

var server = new mosca.Server(settings);
server.on('ready', setup);	//on init it fires up setup()

// fired when the mqtt server is ready
function setup() {
  console.log('Broker Manager is up and running')
}
server.on('published', function(packet, client) {
});
// fired when a client connects
server.on('clientConnected', function(client) {
  console.log('Client Connected:', client.id);
});

// fired when a client disconnects
server.on('clientDisconnected', function(client) {
  console.log('Client Disconnected:', client.id);
});

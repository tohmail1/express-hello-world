//import WebSocket from 'ws';
const WebSocket = require("ws");
//const ws = new WebSocket('ws://www.host.com/path');
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});

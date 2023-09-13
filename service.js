//import WebSocket from 'ws';
//const WebSocketServer = require("ws");
import { WebSocketServer } from 'ws';
//const ws = new WebSocket('ws://www.host.com/path');
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, req) {
  console.log('connection from: %s', req.socket.remoteAddress);
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    wss.clients.forEach(client => if(ws != client) client.send(data));
  });

  ws.send('proxy connected');
});

//import WebSocket from 'ws';
//const WebSocketServer = require("ws");
import { WebSocketServer } from 'ws';
//const ws = new WebSocket('ws://www.host.com/path');
const wss = new WebSocketServer({ port: 80 });

wss.on('connection', function connection(ws, req) {
  console.log('connection from remoteAddress: %s', req.socket.remoteAddress);
  console.log('connection from remotePort: %s', req.socket.remotePort);
  
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    console.log('message: %s', data);
      wss.clients.forEach(function each(client) {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
              console.log('send');
              //client.send(data, { binary: isBinary });
              client.send('data from another device.');
          }
      });
  });
    
  ws.send('connected');
});

// http server project

// open a TCP socket and listen for connections
// set up the TCP server
import net from 'node:net';
import {RequestObjI, RequestObj} from './Request';
import {generateResponse} from "./Response";

// create the TCP server
const server = net.createServer((socket) => {
   console.log('client connected');

   // handle the server disconnecting
   socket.on('end', () => {
       console.log('client disconnected');
   });

   // handle the server receiving data
   socket.on('data', (data) => {
       const requestData = data.toString().trimEnd().split("\r\n")
       let myRequest: RequestObjI = new RequestObj(requestData);

       //console.log(myRequest);
       socket.write(generateResponse((myRequest)))
   });

   // handle server errors
   server.on('error', (err) => {
       throw err;
   });

   // write to the stream
   //socket.write('hello world');

   // sends a readable stream (socket.write buffer) to the writeable (socket) stream
   //socket.pipe(socket);

});

server.listen(8124, () => {
    console.log('server bound');
});

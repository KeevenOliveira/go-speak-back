// from cors import 'cors'
// import cors from 'cors';
import express, { Request, Response } from  'express';
import routes from 'http';
import { Socket } from 'socket.io';
const app = express();
const http = routes.createServer(app);

const io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket: Socket) => {
    console.log('A user connected');
    socket.emit('connection', { message: "Hello, world from back-end!" });
});

http.listen(8080, () => {
    console.log('Listening on *:8080');
});

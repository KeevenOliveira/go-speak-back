// ############### The Legend ###############
// from cors import 'cors' - By: J. Souza
// import cors from 'cors' - By: K. Oliveira
// ##########################################

/* eslint-disable no-console */

import express from "express";
import routes from "http";
import { Socket } from "socket.io";

const app = express();
const http = routes.createServer(app);

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {
  console.log("A user connected");
  socket.emit("connection", { message: "'Hello, World' from back-end!" });
});

http.listen(8080, () => {
  console.log("Listening on *:8080");
});

import express, {Request, Response} from "express"
import {Server, Socket} from "socket.io";
import http from "http";
import cors from 'cors';
require('dotenv').config();

const io = new Server();
const app = express();
const server = http.createServer(app);
const router = express.Router();

app.use(cors({

}));
app.use(express.json());

// app.get('/', (req : Request, res: Response) => {
//     res.send({})
// });
io.on('connect',(socket)=>{
    console.log("hello world");
})
io.on('error', (error)=>{
    console.log('Erro:', error)
})

router.get("/", (req, res) => {
    res.send({response: "Server running"});
})
server.listen(process.env.PORT, () => {
    console.log("Server Started!"+ ` on Port: ${process.env.PORT}`);
});

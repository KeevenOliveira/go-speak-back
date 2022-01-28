import express,{Request, Response}  from "express"
// import http from 'http';
import { Server, Socket} from 'socket.io';
const io = new Server();
const app = express();
const http = require('http').Server(app);
// const result = http.Server(app);
app.use(express.json());

app.get('/teste', (req: Request, res: Response)=>{
    console.log("Parâmetros: ",req.params);
    console.log("Query", req.query);
    res.json({usuário: "Teste"})
})

io.on('connection', (socket: Socket)=>{
    console.log("Pegou")
})
// io.path("/Teste")

http.listen(8001, function() {
    console.log("Listening on 8001");
 });
const express = require("express")
const { Server } = require("socket.io");
var http = require('http');
const cors = require("cors")

const app = express()
app.use(cors())

var server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "https://admirable-fenglisu-a47c99.netlify.app/",
        methods: ["GET", "POST"]
    }
});

app.get("/", (req, res) => { res.send("Chat BE with Socket.io by Ajay");
    res.end() })

io.on("connection", (socket) => {
    console.log(socket.id)

    socket.on("joinRoom", room => {
        socket.join(room)
    })

    socket.on("newMessage", ({ newMessage, room }) => {
        io.in(room).emit("getLatestMessage", newMessage)
    })

    

});

const port = process.env.PORT || port

server.listen(port, console.log(`App started at port ${port}`))

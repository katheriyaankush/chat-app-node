const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const router = require('./router');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./user')

const app = express();
const server = http.createServer(app);
const io = socketio(server);
//app.use(cors());
app.use(router);

const port = process.env.PORT || 5000;

io.on('connect', (socket) => {

    console.log('New Socket Connection');
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });
        if (error) return callback(error);
        socket.join(user.room);

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let timeC = hours + ':' + minutes + ' ' + ampm;

        socket.emit('message', { user: 'admin', time: timeC, text: `${user.name}, welcome to room ${user.room}.` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', time: timeC, text: `${user.name}, has joined!` })
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
        console.log('NameOB', name, room);
    })
    socket.on('sendMessage', (message, callback) => {

        const user = getUser(socket.id);

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let timeC = hours + ':' + minutes + ' ' + ampm;
        console.log("User Room", user);
        io.to(user.room).emit('message', { user: user.name, time: timeC, text: message });
        callback();
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let timeC = hours + ':' + minutes + ' ' + ampm;
        if (user) {

            io.to(user.room).emit('message', { user: 'admin', time: timeC, text: `${user.name} has left.` });
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        }
        // io.emit('message', "User left!");
    })

})

app.use(router);

server.listen(port, () => {
    console.log(`server is up ${port}`);
});
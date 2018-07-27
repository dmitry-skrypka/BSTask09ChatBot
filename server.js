const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');



const trigger = require('./Controller/trigger');
const  commandType = require('./Controller/commandType');
const  BotAnswer = require('./Controller/botAnswer');





app.use(express.static(path.join(__dirname, '/public')));

let messages = [],
    users = [];


io.on('connection', (socket) => {
    console.log('Client Connected');
    socket.join('all');
    socket.on('newUser', (obj) => {


        const user = {

            username: obj.username,
            name: obj.name
        };
        users.push(user);

        socket.to('all').emit("global", user);
        socket.to('all').emit("addUser", user);

        socket.username = obj.username;

        socket.emit('login', obj);
    });


    socket.on('msg', content => {
        const obj = {
            date: new Date(),
            content: content,
            username: socket.username
        };
        messages.push(obj);
        if (messages.length > 100) {
            messages.shift();
        }
        socket.emit("message", obj);
        socket.to('all').emit("message", obj);

            if (trigger(obj)) {
                const command = commandType(obj);


                let botAnswer = new BotAnswer().selector(command, obj);
                socket.emit("message", botAnswer);

            }
            });

    socket.on('receiveHistory', () => {
        socket.emit("history", messages);

    });

    socket.on('receiveUsers', () => {

        socket.emit("users", users);


    });
    socket.on('typingMessage', () => {
        let user = socket.username;
        let typer = {
            username: user,
            status: 'typing'
        };
        socket.to('all').emit("userIsTyping", typer)
    });

    socket.on('noLongerTypingMessage', () => {
        let user = socket.username;
        let typer = {
            username: user,
            status: 'nottyping'
        };

        socket.to('all').emit("userIsTyping", typer)
    });
    socket.on('userleft', () => {
        let user = socket.username;

        socket.to('all').emit("userleft", user);
        console.log(user)
    })


});
http.listen(7777, () => {
    console.log('Server Started on 7777')
});







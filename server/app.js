const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const {addUser , removeUser , getUser , usersInRooms} = require('./users')

const router = require('./router')

Port = process.env.Port || 5000;
io.on('connection', (socket)=>{
    socket.on('join' , ({name , room } , callback )=>{
        const {error , user} = addUser({id : socket.id , name , room})
        if (error) {
            callback(error)
        }
        socket.emit('message' , {user :  'admin' , text : `${user.name} , welcome to the room ${user.room}`})
        socket.broadcast.to(user.room).emit('message' , {user :'admin ' , text : `${user.name } has joined party`})
       socket.join(user.room)
    })
    socket.on('sendMessage' , (message , callback)=>{
        const user = getUser(socket.id)
        io.to(user.room).emit('message' , {name : user.name , text : message})
        callback(); 

    })
    socket.on('disconnect', ()=>{
        console.log('client has left')
    })
})
app.use(router)

server.listen(Port , function(){console.log('server has started on port 5000')})
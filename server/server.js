const express = require('express')
const http = require('http');
const socketio = require('socket.io')
const mongoose = require('mongoose')
const AuthRoutes = require('./route/Auth')
const { getData ,FetchSocket} = require('./controller/AuthController')
//
const bodyparser = require('body-parser')
const app = express()
const server = http.createServer(app);
const io = socketio(server, { cors: { origin: '*' } })



app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())

io.on('connect', socket => {
    console.log('user connected1')

    socket.on('testing',async (data) => {
        console.log("-----data", data)
        getData(data)
        
        let Data =await FetchSocket()
        console.log(Data,'FetchFetchFetchFetch')

        socket.emit('testingEmit', Data)
    })
    socket.on('disconnect', () => {
        console.log('user Disconnect1')
    })
})



server.listen(2053, () => {

    console.log('Server is Running!!!')
})

app.use('/Api', AuthRoutes)



mongoose.connect("mongodb://localhost:27017/SOCKET-CHAT", (err) => {
    if (err) {
        console.log('db not connect', err)
    }
    console.log('db connect sucessfully')
})
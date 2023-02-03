import express from 'express'
import { Server } from 'socket.io'
import handlebars from 'express-handlebars'
import { __dirname } from './utils.js'


const app = express()

//archivos estaticos en public
app.use(express.static(__dirname+'/public'))

// handlebars
app.engine('handlebars',handlebars.engine())
app.set('view engine','handlebars')
app.set('views',__dirname+'/views')


//ruta
app.get('/',(req,res)=>{
    res.render('websocket')
})



const httpServer = app.listen(8080, () => {
  console.log('Escuchando al puerto 8080')
})

const socketServer = new Server(httpServer)

const mensajes = []

socketServer.on('connection',(socket)=>{
    console.log(`Usuario conectado ${socket.id}`)

    socket.on('disconnect',()=>{
        console.log('Uusario desconectado');
    })

    socket.emit('saludo','Bienvenido a webSocket')

    socket.on('respuestaSaludo',(mensaje)=>{
        console.log(mensaje)
    })

    socket.on('mensaje',(obj)=>{
        mensajes.push(obj)
        //socket.emit('respuestaMensaje',mensajes)
        socketServer.emit('respuestaMensaje',mensajes)
    })

})
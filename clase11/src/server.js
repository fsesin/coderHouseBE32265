import express from 'express'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import { Server, Socket } from 'socket.io'
import viewsRouter from './routes/views.router.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// archivos estaticos
app.use(express.static(__dirname+'/public'))

// motores de plantilla
app.engine('handlebars',handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views',__dirname+'/views')

// ruta raiz
app.use('/',viewsRouter)


const httpServer = app.listen(8080,()=>{
    console.log('Escuchando al puerto 8080');
})

// websocket

const socketServer = new Server(httpServer)

const infoMensajes = []

socketServer.on('connection',socket=>{
    console.log(`Usuario conectado: ${socket.id}`)
 
    socket.on('disconnect',()=>{
        console.log('Usuario desconectado')
    })

    socket.on('nuevoUsuario',usuario=>{
        socket.broadcast.emit('broadcast',usuario)
    })

    socket.on('mensaje',info=>{
        infoMensajes.push(info)
        socketServer.emit('chat',infoMensajes)
    })
})
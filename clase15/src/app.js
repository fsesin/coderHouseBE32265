import express from 'express'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import coursesRouter from './routes/courses.router.js'
import usersRouter from './routes/users.router.js'

// importar DBConfig
import './dao/dbConfig.js'


const app = express()
const PORT = 3000



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))

// routes
app.use('/courses',coursesRouter)
app.use('/users',usersRouter)
app.use('/views',viewsRouter)


// motor de plantilla
app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`);
})
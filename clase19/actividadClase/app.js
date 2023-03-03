import express from 'express'
import cookieParser from 'cookie-parser'
import handlebars from 'express-handlebars'
import { __dirname } from './utils.js'
import loginRouter from './routes/login.router.js'
import viewsRouter from './routes/views.router.js'
import sessionRouter from './routes/session.router.js'
import session from 'express-session'

const app = express()

const cookieKey = 'SignedCookieKey'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// configuracion cookie-parser
app.use(cookieParser(cookieKey))
// cofiguracion express-session
app.use(
  session({
    secret: 'secretCoder65',
    resave: false,
    saveUninitialized: true,
    //cookie:{maxAge:50000}
  })
)

//routes
app.use('/login', loginRouter)
app.use('/views', viewsRouter)
app.use('/session', sessionRouter)

//motor de plantilla
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})

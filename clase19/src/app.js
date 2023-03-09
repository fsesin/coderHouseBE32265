import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import FileStore from 'session-file-store'
import { __dirname } from './utils.js'
import usersRouter from './routes/users.router.js'
import './persistencia/dbConfig.js'
import mongoStore from 'connect-mongo'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
const app = express()

// MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// handlebars
app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine', 'handlebars')


// file session
// const fileStore = FileStore(session)
// app.use(
//   session({
//     secret: 'sessionKey',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 50000 },
//     store: new fileStore({
//       path: __dirname + '/sessions',
//     }),
//   })
// )

// mongo session
app.use(
    session({
      secret: 'sessionKey',
      resave: false,
      saveUninitialized: true,
      store: new mongoStore({
        mongoUrl: 'mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/mongoSession65?retryWrites=true&w=majority'
      }),
    })
  )

app.use('/users',usersRouter)
app.use('/views',viewsRouter)

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})

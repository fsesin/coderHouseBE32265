import express from 'express'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))

// configurar handlebars
app.engine('handlebars',handlebars.engine()) // unicamente lo hacemos para handlebars o para crear un motor propio
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')

app.get('/',(req,res)=>{
    res.render('vista1')
})

app.get('/vista2',(req,res)=>{
    res.render('vista2')
})



app.listen(8080, () => {
  console.log('Escuchando al puerto 8080')
})

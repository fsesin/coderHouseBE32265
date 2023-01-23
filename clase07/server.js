import express from 'express'
import UsersClass from './Users.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))





const usersClass = new UsersClass('Usuarios.json')

// rutas

app.get('/api/users',async(req,res)=>{
const users = await usersClass.findUsers()
res.json({users})
})

app.get('/api/users/:idUser',async(req,res)=>{
    const {idUser} = req.params
   const user = await usersClass.findUserById(parseInt(idUser)) 
   res.json({user})
})

app.post('/api/users',async (req,res)=>{
    const obj = req.body
    const user = await usersClass.createUser(obj)
    res.json({message:'usuario creado con exito',user}) 
})

app.put('/api/users/:idUser',(req,res)=>{
    
})

app.delete('/api/users',(req,res)=>{
    
})

app.delete('/api/users/:idUser',(req,res)=>{
    
})









app.listen(8081,()=>{
    console.log('Escuchando al puerto 8081')
})


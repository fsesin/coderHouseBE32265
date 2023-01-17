//// modulo HTTP
//const http = require('http')
// import http from 'http'

// const server = http.createServer((req,res)=>{
//     console.log(req.url)
//     if(req.url==='/productos'){
//         console.log('request de productos');
//         res.end('request de productos')
//     } else {
//         res.end('otros request')
//     }
// })

// server.listen(8080,()=>{
//     console.log('Escuchando al puerto 8080');
// })


//// EXPRESS

const productos = [
    {
        id:1,
        nombre:'iPhone',
        precio: 500,
        stock:25
    },
    {
        id:2,
        nombre:'iPad',
        precio: 200,
        stock:40
    },
    {
        id:3,
        nombre:'TV',
        precio: 1000,
        stock:15
    },
    {
        id:4,
        nombre:'Computador',
        precio: 1500,
        stock:20
    },
]

const usuarios = [
    {
        id:1,
        nombre: 'Juan',
        apellido: 'Hoyos',
        edad: 38,
        correo: 'jhoyos@mail.com',
      },
      {
        id:2,
        nombre: 'Luis',
        apellido: 'Gutierrez',
        edad: 26,
        correo: 'lgutierrez@mail.com',
      }
]

import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1 style="color:blue">Ruta raiz</h1>')
    //res.json(productos)
    //res.redirect
    //res.render
})
// buscar todos los productos
app.get('/productos',(req,res)=>{
    const {limit} = req.query
    console.log(req.query)
    //console.log(req)
    //res.send('Ruta productos')
    const productosLimit = productos.slice(0,limit)
    res.json({productos:productosLimit})
})

// buscar un producto en particular
app.get('/productos/:idProducto',(req,res)=>{
    const {idProducto} = req.params
    const producto = productos.find(p=>p.id===parseInt(idProducto))
    if(producto){
        res.json({mesage:'Producto encontrado',producto})
    } else {
        res.json({mesage:'Producto no encontrado'})
    }
})


app.get('/clientes',(req,res)=>{
    //res.send('Ruta clientes')
    res.json(clientes)
})



app.listen(8080,()=>{
    console.log('Escuchando al puerto 8080')
})
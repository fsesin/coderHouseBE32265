import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()
const cookieKey = 'SignedCookieKey'
app.use(cookieParser(cookieKey))

// guardar info en cookies
app.get('/crearCookie',(req,res)=>{
    res.cookie('primeraCookie65','mi primera cookie 65'
    //,{maxAge:5000}
    )
    .send('Cookie guardada con exito')
})
//guardar info en cookies firmada
app.get('/crearCookieFirmada',(req,res)=>{
    res.cookie('segundaCookie65','cookieFirmada',{signed:true,maxAge:10000})
    .send('Cookie firmada guardada con exito')
})
// leer info en cookies
app.get('/leerCookie',(req,res)=>{
    console.log(req.cookies);
    const {primeraCookie65} = req.cookies
    res.json({cookie:primeraCookie65})
})
// leer info cookie Firmada
app.get('/leerCookieFirmada',(req,res)=>{
    console.log(req.signedCookies);
    const {primeraCookie65} = req.cookies
    const {segundaCookie65} = req.signedCookies
    res.json({cookie:primeraCookie65,signedCookie:segundaCookie65})
})
// eliminar cookie
app.get('/borrarCookie',(req,res)=>{
    res.clearCookie('primeraCookie65').send('Cookie eliminada con exito')
})

app.get('/modificarCookie',(req,res)=>{
    res.cookie('primeraCookie65','modificada').send('Cookie modificada')
})



const PORT = 3000
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})

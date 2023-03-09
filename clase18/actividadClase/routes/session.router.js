import { Router } from "express";

const router = Router()

router.post('/',(req,res)=>{
    const {usuario,contrasena} = req.body
    req.session['usuario'] = usuario
    req.session['contrasena'] = contrasena
    
    console.log(req);
    res.send('Creando session')
})


export default router
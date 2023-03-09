import {Router} from 'express'

const router = Router()

router.get('/',(req,res)=>{
    res.render('login')
})

router.get('/registro',(req,res)=>{
    res.render('registro')
})

router.get('/errorRegistro',(req,res)=>{
    res.render('errorRegistro')
})

router.get('/errorLogin',(req,res)=>{
    res.render('errorLogin')
})

router.get('/perfil',(req,res)=>{
    res.render('perfil')
})
export default router
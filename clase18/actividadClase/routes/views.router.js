import { Router } from "express";

const router = Router()

router.get('/',(req,res)=>{
    res.render('login')
})

router.get('/session',(req,res)=>{
    res.render('session')
})
export default router
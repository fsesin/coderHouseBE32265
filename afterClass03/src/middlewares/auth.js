export const verificarUsuario = (req,res,next)=>{
    console.log('middleware',typeof req.headers.isadmin)
    if(req.headers.isadmin === 'true'){
        next()
    } else {
        res.json({message:'No estas autorizado para realizar esta operacion'})
    }
}

export const verificarDatos = (req,res,next)=>{
    const {id,nombre,apellido,edad} = req.body
    if(!id || !nombre || !apellido || !edad){
        res.json({message:'Ingresa todos los datos'})
    } else {
        next()
    }
}
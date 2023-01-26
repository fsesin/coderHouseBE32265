export const validarUsuario1 = (req, res, next) => {
  const user = req.body
  if (user.nombre === 'Matias') {
    res.send('Tu no estas habilitado')
  } else {
    next()
  }
}

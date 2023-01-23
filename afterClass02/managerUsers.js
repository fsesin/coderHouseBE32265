import fs from 'fs'

export default class UserManager {
  constructor(path) {
    this.path = path
  }
  async consultarUsuarios(info) {
    const {cant,orden} = info
    console.log(info)
    if (fs.existsSync(this.path)) {
      const usuariosArchivos = await fs.promises.readFile(this.path, 'utf-8')
      const usuariosJS = JSON.parse(usuariosArchivos)
      if(cant){
        return usuariosJS.slice(0,cant)
      }
      return usuariosJS
    } else {
      return []
    }
  }

  async consultarUsuarioById(id) {
    const usersArchivos = await this.consultarUsuarios()
    const user = usersArchivos.find((u) => u.id === id)
    if (user) {
      return user
    }
    return false
  }

  async crearUsuario(obj) {
    const { id, nombre, apellido, edad } = obj
    const usuario = {
      id,
      nombre,
      apellido,
      edad,
    }
    const usuariosArchivos = await this.consultarUsuarios()

    usuariosArchivos.push(usuario)
    await fs.promises.writeFile(this.path, JSON.stringify(usuariosArchivos))
    return usuario
  }

  async eliminarUsuario(id){
    const usersArchivos = await this.consultarUsuarios()
    const arrayNuevo = usersArchivos.filter(u=>u.id!== id)
    await fs.promises.writeFile(this.path, JSON.stringify(arrayNuevo))
  }
  async eliminarUsuarios(){
    if(fs.existsSync(this.path)){
        await fs.promises.unlink(this.path)
    }
  }
}

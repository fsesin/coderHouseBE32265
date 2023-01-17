const fs = require('fs')
const crypto = require('crypto')

const path = './Usuarios.json'

class UserManager {
  // constructor(path){
  //     this.path=path
  // }
  async consultarUsuarios() {
    if (fs.existsSync(path)) {
      const usuariosArchivos = await fs.promises.readFile(path, 'utf-8')
      const usuariosJS = JSON.parse(usuariosArchivos)
      return usuariosJS
    } else {
      return []
    }
  }

  async crearUsuario(obj) {
    const { nombre, apellido, userName, contrasena } = obj
    const usuario = {
      nombre,
      apellido,
      userName,
      contrasena,
    }
    const usuariosArchivos = await this.consultarUsuarios()

    // SALT

    usuario.salt = crypto.randomBytes(128).toString('base64')
    usuario.contrasena = crypto
      .createHmac('sha256', usuario.salt)
      .update(usuario.contrasena)
      .digest('hex')

    usuariosArchivos.push(usuario)
    await fs.promises.writeFile(path, JSON.stringify(usuariosArchivos))
  }

  async validarUsuario(userName, contrasena) {
    const usuariosArchivo = await this.consultarUsuarios()
    const usuario = usuariosArchivo.find((u) => u.userName === userName)
    if (!usuario) {
      console.log('Error: Usuario o contrasena no validas')
      return
    }
    const nuevaCrypto = crypto
      .createHmac('sha256', usuario.salt)
      .update(contrasena)
      .digest('hex')

    if (usuario.contrasena === nuevaCrypto) {
      console.log('Logueado')
    } else {
      console.log('Error: Usuario o contrasena no validas')
    }
  }
}

const manager = new UserManager()
const usuario1 = {
  nombre: 'Juan',
  apellido: 'Rodriguez',
  userName: 'jrodriguez',
  contrasena: '1234abcd',
}

const usuario2 = {
  nombre: 'Ernesto',
  apellido: 'Gomez',
  userName: 'egomez',
  contrasena: 'abcde',
}
async function prueba() {
  //await manager.crearUsuario(usuario2)
  //const usuarios = await manager.consultarUsuarios()
  //console.log(usuarios)
  await manager.validarUsuario('jrodriguez', '1234abc')
}

prueba()

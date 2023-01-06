// function sumar(a, b) {
//   // bloque a ejecutar
//   return a + b
//   // console.log(resultado)
// }
// console.log(sumar(5, 4))

// const sumarArrow = a => a + 5
// //const sumarArrow = (a, b) => a + b

// ASINCRONIA

// const productos = fetch(url)
// productos.forEach(cb)

// callback

// function callback(parametro){
//     return `Hola ${parametro}`
// }

// function principal(parametro1,cb){
//     const respuesta = cb(parametro1)
//     return respuesta
// }

// console.log(principal('Pablo',callback))

// [].forEach(elemento=>console.log(elemento))

// BD callbacks anidados

const familiares = []
const usuarios = []

function agregarFamiliarCB(usuario, infoFamiliar) {
  usuarios.findById(usuario.id, function (error, usuario) {
    if (error) {
      return error
    } else {
      familiares.findAllByLastName(
        usuario.lastName,
        function (error, familiares) {
          if (error) {
            return error
          } else {
            if (familiares.includes(infoFamiliar)) {
              return 'Este familiar ya existe'
            } else {
              familiares.createOne(infoFamiliar, function (error) {
                if (error) {
                  return error
                } else {
                  return 'familiar creado con exito'
                }
              })
            }
          }
        }
      )
    }
  })
}

// CREAR PROMESAS

function funcPromesa(a, b) {
  return new Promise((resolve, reject) => {
    if (a === 0) {
      reject('Promesa rechazada')
    } else {
      resolve(a + b)
    }
  })
}

// .then - .catch

function agregarFamiliarPROMESAS(usuario, infoFamiliar) {
  usuarios
    .findById(usuario.id)
    .then((usuario) => {
      return familiares.findAllByLastName(usuario.lastName)
    })
    .then((familiares) => {
      if (familiares.includes(infoFamiliar)) {
        return 'Familiar ya existe'
      } else {
        return familiares.createOne(infoFamiliar)
      }
    })
    .then(() => 'familiar creado con exito')
    .catch((error) => console.log(error))
}

// ASYNC AWAIT

async function agregarFamiliarAsync(usuario, infoFamiliar) {
  try {
    const usuario = await usuarios.findById(usuario.id)
    const familiaresUsuario = await familiares.findAllByLastName(
      usuario.lastName
    )
    if (familiaresUsuario.includes(infoFamiliar)) {
      return 'Familiar ya existe'
    } else {
      await familiares.createOne(infoFamiliar)
      return 'Familiar creado con exito'
    }
  } catch (error) {
    console.log(error)
  }
}

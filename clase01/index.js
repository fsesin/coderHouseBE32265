// // string

// // 'hola como estan?'

// // number

// // 5

// // boolean

// // true - false

// // array

// let array = [1, 2, 3, 4, 5, true, 'hola']

// // console.log(typeof 5)
// // console.log(typeof 'hola')
// // console.log(typeof array)

// let primeraVar

// primeraVar = 10

// let arrayCopia = array
// arrayCopia[0] = 'primera posicion'
// //console.log(arrayCopia)
// //console.log(array)

// // ACTIVIDAD EN CLASE

// // let nombre = 'Nicolas'
// // let apellido = 'Aguero'
// // let edad = 35
// // let curso = 'JS'
// //let precio = 100
// //let series = ['Breaking Bad','Friends']
// //let peliculas = ['Matrix','Avatar']
// // let usuario = {
// //     nombre:'Nicolas',
// //     apellido:'Aguero',
// //     edad:35,
// //     curso:'JS'
// // }
// let usuarios = [
//   {
//     nombre: 'Nicolas',
//     edad: 35,
//     precio: 100,
//     series: ['Breaking Bad', 'Friends'],
//     peliculas: ['Matrix', 'Avatar'],
//   },
//   {
//     nombre: 'Javier',
//     edad: 28,
//     precio: 120,
//     series: ['Breaking Bad', 'Friends'],
//     peliculas: ['Matrix', 'Avatar'],
//   },
// ]

// console.log(usuarios)

// usuarios.forEach(usuario=>{
//     //usuario.edad = usuario.edad+1
//     usuario.edad++,
//     usuario.series.push('GOT')
// })
// console.log(usuarios)

var primeraVariable = 'Primera VAR'
let segundaVariable = 'Segunda VAR'

{
  //console.log(primeraVariable,segundaVariable)
  var terceraVariable = 5
  let cuartaVariable = 10
}
console.log(terceraVariable)
//console.log(cuartaVariable)

const primeraConst = 5
//primeraConst = 10

//let series = ['Breaking Bad','Friends']
const series = ['Breaking Bad', 'Friends']
series.push('GOT')
console.log(series)

// funcion

// function sumar(num1, num2) {
//   const resultado = num1 + num2
//   //console.log(resultado)
//   return resultado
//   //return num1+num2
// }
// console.log(sumar(5,4))
// const resultadoSuma = sumar(5,4)
// console.log(resultadoSuma+10)

// arrow function

const sumar = (num1, num2) => {
  return num1 + num2
}
const restar = (num1, num2) => num1 - num2
const palabra = 'BackEnd'
console.log('Bienvenidos al curso de: ' + palabra + ', este curso dura 5 meses')
console.log(`Bienvenidos al curso de: ${palabra}, este curso dura 5 meses`)


function funcUno() {
  let x = 0
  return function () {
    console.log(x)
  }
}

// 
class Usuario{
    constructor(nombre,email,password){
        this.nombre = nombre
        this.email = email
        this.password = password
    }
    #tieneEmail(){
        if(this.email){
            return true
        } else {
            return false
        }
    }
}

const usuario1 = new Usuario('Pablo','pablo@mail.com','12345')
const usuario2 = new Usuario('Cristina','cristina@mail.com','12345')
console.log(usuario2.)
usuario1.
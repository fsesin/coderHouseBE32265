const socketClient = io()

socketClient.on('saludo',(mensaje)=>{
    console.log('El servidor envioeste mensaje: ',mensaje);

    socketClient.emit('respuestaSaludo','Muchas gracias')

})

const formulario = document.getElementById('formulario')
const inputNombre = document.getElementById('nombre')
const inputMensaje = document.getElementById('mensaje')
const parrafoMensajes = document.getElementById('parrafoMensajes')

formulario.onsubmit = (e)=>{
    e.preventDefault()
    const nombre = inputNombre.value
    const mensaje = inputMensaje.value
    socketClient.emit('mensaje',{nombre,mensaje})
}

socketClient.on('respuestaMensaje',(mensajes)=>{
    let infoMensajes = ''
    mensajes.forEach(m=>{
        infoMensajes += `El usuario ${m.nombre} dice: ${m.mensaje} </br>`
    })
    parrafoMensajes.innerHTML = infoMensajes
})
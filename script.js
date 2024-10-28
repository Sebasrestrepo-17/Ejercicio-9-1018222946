//Planteamiento del Problema:
//Un concesionario necesita un sistema que permita calcular las cuotas mensuales de
//los clientes que adquieren un vehículo financiado. Las tasas de interés varían según
//el plazo del préstamo.


const usuario = 'admin'
const contraseña = '1234'
let intentos = 0
const maxIntentos = 3

while (intentos < maxIntentos){
    const ingresoUsuario = prompt('Ingrese su nombre de usuario:')
    const ingresoContraseña = prompt('Ingrese su contraseña:')

    if (ingresoUsuario === usuario && ingresoContraseña === contraseña){
        console.log('Permitido el acceso, Bienvenido al sistema: ')
        break;
    } else {
        intentos++
        console.log('Datos de ingreso incorrectos. Intento número: '+ intentos + ' de'+ maxIntentos)
    }

    if (intentos === maxIntentos){
        console.log('Has alcanzado el número máximo de intentos. Cerrando el sistema')
        break;
    }
}

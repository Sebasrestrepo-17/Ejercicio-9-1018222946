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
    


function calcularFinanciamiento(monto, interes, meses){
    const tasaMensual = interes / 100 / 12;
    return (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -meses));

}

let continuar = true;

while (continuar){
const monto = parseFloat(prompt("Ingrese el monto total del prestamo:"));
const interes = parseFloat(prompt("Ingrese la tasa de interes en %"));
const meses = parseInt(prompt("Ingrese a que numero de meses va ser el prestamo"))


let tasaFinal = interes
if (meses < 12){
    tasaFinal += 2;
}
else if (meses > 36){
    tasaFinal -= 1;
}

    const cuotaMensual = calcularFinanciamiento(monto, tasaFinal, meses);

console.log('La cuota mensual seria de: ' + cuotaMensual);



continuar = confirm("Desea calcular el financiamento nuevamente?")
        }
    }


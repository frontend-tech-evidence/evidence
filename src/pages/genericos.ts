/**
 * @author Raul Galindo
 * @description Entry point for precios page
 */

/* Reglas de negocio:
1- El costo de los timbres es cero si el número de timbres gratis es mayor que 
la cantidad de timbres necesarios, en caso contrario, el costo se calcula
 multiplicando el precio por timbre extra por la cantidad de timbres excedentes.

2- El costo base de renta final se calcula multiplicando el costo base de renta 
mensual por 11 si el usuario selecciona pagar por el servicio anualmente, 
de lo contrario, el costo es igual al costo base de renta mensual.

3- En los paquetes "Grow" y "Start", si el usuario elige no pagar por capacitación
 o migración, entonces el costo de la capacitación o migración será cero.

4- El costo de implementación final se calcula tomando el costo de activación, 
el costo de migración y el costo de capacitación y aplicando un descuento del 
10% si el usuario elige pagar por el servicio de implementación en una sola exhibición.
 Si el usuario selecciona el plan de pagos, entonces el costo de 
implementación se divide en 12 pagos iguales.

5- En el paquete "Manufacturing" y "Enterprise", si el número de usuarios es mayor que 
49, entonces el costo de los usuarios extras se calcula multiplicando 
el precio por usuario después del límite por el número de usuarios extras y el costo de
 los usuarios normales se calcula multiplicando el precio por usuario
 después del límite por 49. El costo de los usuarios finales es la suma del costo de
  los usuarios normales y el costo de los usuarios extras.

6- El costo total con descuento se calcula sumando el costo base de renta final, el
 costo de implementación final, el costo de los usuarios finales y el costo 
de los timbres, y aplicando un descuento del 10% si el usuario selecciona pagar por 
el servicio de implementación en una sola exhibición.

7- El costo total sin descuento se calcula sumando el costo de los timbres, el costo
 base de renta anual, el costo de la capacitación, el costo de la migración, 
el costo de activación y el costo de los usuarios finales.

8- El costo del segundo pago se calcula restando el costo de implementación final 
al costo total con descuento.

9- Si la moneda es USD, entonces los costos deben ser transformados a dólares antes
 de crear el objeto. */

export function calcularCosto(
    packageType: string = '',
    numTimbresGratis: number = 0,
    numTimbresAgregados: number = 0,
    precioTimbreExtra: number = 0,

    // Parametros de Membresia
    costoBaseMembresiaMensual: number = 0,
    pagarMembresiaMensual: boolean = false,

    // Parametros de implementacion
    costoActivacion: number = 0,
    costoCapacitacion: number = 0,
    pagarCapacitacion: boolean = true,
    costoMigracion: number = 0,
    pagarMigracion: boolean = true,
    pagarImplementacionMensual: boolean = false,

    // Parametros de usuarios
    numUsuarios: number = 0,
    numUsuariosLimites: number = 49,
    precioUsuarioDespuesLimite: number = 0,
    precioUsuario: number = 0,
    usuariosGratis: number = 1,

    // Parametro de cambio de moneda
    tasaDeCambio: string = 'mxn',
    precioDolar: number = 16
) {
    // ------------------------ Membresia ------------------------
    let costoBaseMembresiaFinal = costoBaseMembresiaMensual

    if (!pagarMembresiaMensual) {
        costoBaseMembresiaFinal = Number(costoBaseMembresiaMensual) * 11
    }

    // ------------------------ Implementacion ------------------------

    // -------- Capacitacion --------
    let costoCapacitacionFinal = 0
    if (packageType === 'grow' || packageType === 'start') {
        if (pagarCapacitacion) {
            costoCapacitacionFinal = costoCapacitacion
        } else {
            costoCapacitacionFinal = 0
        }
    } else {
        costoCapacitacionFinal = costoCapacitacion
    }

    // -------- Migracion --------
    let costoMigracionFinal = 0
    if (packageType === 'grow' || packageType === 'grow') {
        if (pagarMigracion) {
            costoMigracionFinal = costoMigracion
        } else {
            costoMigracionFinal = 0
        }
    } else {
        costoMigracionFinal = costoMigracion
    }

    let costoImplementacionFinal =
        costoActivacion + costoCapacitacionFinal + costoMigracionFinal

    if (!pagarImplementacionMensual) {
        costoImplementacionFinal *= 0.9
    } else {
        costoImplementacionFinal /= 12
    }

    // ------------------------ Timbres ------------------------
    let costoTimbres = 0
    if (numTimbresGratis > numTimbresAgregados) {
        costoTimbres = 0
    } else {
        costoTimbres =
            (Number(numTimbresAgregados) - Number(numTimbresGratis)) *
            Number(precioTimbreExtra)
    }

    // ------------------------ Usuarios ------------------------
    let costoUsuariosFinales = precioUsuario * (numUsuarios - usuariosGratis)

    if (packageType === 'manufacturing' || packageType === 'enterprise') {
        if (numUsuarios > numUsuariosLimites) {
            let numUsuariosExtras = numUsuarios - numUsuariosLimites

            let costoUsuariosExtras =
                numUsuariosExtras * precioUsuarioDespuesLimite
            let costoUsuariosNormales =
                (numUsuariosLimites - usuariosGratis) * precioUsuario

            costoUsuariosFinales = costoUsuariosExtras + costoUsuariosNormales
        }
    }

    // ------------------------ Total primer año ------------------------
    let precioTotalPrimerAño = Math.floor(
        costoTimbres +
            costoBaseMembresiaFinal +
            costoImplementacionFinal +
            costoUsuariosFinales
    )

    // ------------------------ Total segundo año ------------------------
    let precioTotalSegundoAño = Math.floor(
        costoTimbres + costoBaseMembresiaFinal + costoUsuariosFinales
    )

    // ------------------------ Tasa de cambio ------------------------

    if (tasaDeCambio === 'usd') {
        precioTotalPrimerAño = Math.floor(precioTotalPrimerAño / precioDolar)
    }

    const precios = {
        precioTotalPrimerAño,
        precioTotalSegundoAño,
    }

    return precios
}

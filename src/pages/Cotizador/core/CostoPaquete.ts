/**
 * @author Raul Galindo
 * @description Responsabilidad: Retornar los costos relacionado con un paquete.
 */

export function calcularCostoImplementacion(
    costoActivacion: number,
    costoMigracion: number,
    costoCapacitacion: number,
    descuento: number,
    isPagoMensual: boolean = false
): number {
    const costoTotal = costoActivacion + costoMigracion + costoCapacitacion
    const descuentoEnDecimal = descuento / 100
    const numeroMeses = 12

    if (isPagoMensual) {
        return costoTotal / numeroMeses
    }

    return costoTotal * (1 - descuentoEnDecimal)
}

export function calcularCostoMembresia(
    costoBaseMensual: number,
    mesesDeRegalo: number,
    isPagoMensual: boolean = false
): number {
    const mesesDelAño: number = 12

    if (isPagoMensual) {
        return costoBaseMensual
    }
    return costoBaseMensual * (mesesDelAño - mesesDeRegalo)
}

export function calcularCostoTimbres(
    timbresRequeridos: number,
    timbresGratis: number,
    precioTimbreExtra: number
): number {
    let costoTotal: number = 0

    if (timbresRequeridos > timbresGratis) {
        costoTotal = (timbresRequeridos - timbresGratis) * precioTimbreExtra
        return costoTotal
    }
    return costoTotal
}

export function calcularCostoUsuario(
    cantidadRequeridos: number,
    cantidadGratisIncluidos: number,
    costoUsuarioExtra: number,
    hasPrecioVariable: boolean = false,
    costoUsuarioExtraDespuesDeLimite?: number,
    cantidadDeUsuariosSinDescuento?: number
): number {
    if (hasPrecioVariable) {
        if (cantidadRequeridos > cantidadDeUsuariosSinDescuento) {
            const cantidadAntesDelRango =
                cantidadDeUsuariosSinDescuento - cantidadGratisIncluidos

            const cantidadDespuesDelRango =
                cantidadRequeridos - cantidadDeUsuariosSinDescuento

            const costoDespuesDelLimite =
                cantidadDespuesDelRango * costoUsuarioExtraDespuesDeLimite

            const costoAntesDelLimite =
                cantidadAntesDelRango * costoUsuarioExtra

            return costoDespuesDelLimite + costoAntesDelLimite
        }
    }

    const costo = Math.abs(
        (cantidadGratisIncluidos - cantidadRequeridos) * costoUsuarioExtra
    )

    return costo
}

export function calcularCostoPrimerAño(
    costoImplementacion: number,
    costoMembresia: number,
    costoTimbres: number,
    costoUsuarios: number
): number {
    return Math.round(
        costoImplementacion + costoMembresia + costoTimbres + costoUsuarios
    )
}

export function calcularCostoSegundoAño(
    costoMembresia: number,
    costoTimbres: number,
    costoUsuarios: number
): number {
    return Math.round(costoMembresia + costoTimbres + costoUsuarios)
}

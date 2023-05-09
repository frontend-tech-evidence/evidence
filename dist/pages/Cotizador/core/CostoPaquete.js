/**
 * @author Raul Galindo
 * @description Responsabilidad: Retornar los costos relacionado con un paquete.
 */
export function calcularCostoImplementacion(costoActivacion, costoMigracion, costoCapacitacion, descuento, isPagoMensual = false) {
    const costoTotal = costoActivacion + costoMigracion + costoCapacitacion;
    const descuentoEnDecimal = descuento / 100;
    const numeroMeses = 12;
    if (isPagoMensual) {
        return costoTotal / numeroMeses;
    }
    return costoTotal * (1 - descuentoEnDecimal);
}
export function calcularCostoMembresia(costoBaseMensual, mesesDeRegalo, isPagoMensual = false) {
    const mesesDelAño = 12;
    if (isPagoMensual) {
        return costoBaseMensual;
    }
    return costoBaseMensual * (mesesDelAño - mesesDeRegalo);
}
export function calcularCostoTimbres(timbresRequeridos, timbresGratis, precioTimbreExtra) {
    let costoTotal = 0;
    if (timbresRequeridos > timbresGratis) {
        costoTotal = (timbresRequeridos - timbresGratis) * precioTimbreExtra;
        return costoTotal;
    }
    return costoTotal;
}
export function calcularCostoUsuario(cantidadRequeridos, cantidadGratisIncluidos, costoUsuarioExtra, hasPrecioVariable = false, costoUsuarioExtraDespuesDeLimite, cantidadDeUsuariosSinDescuento) {
    if (hasPrecioVariable) {
        if (cantidadRequeridos > cantidadDeUsuariosSinDescuento) {
            const cantidadAntesDelRango = cantidadDeUsuariosSinDescuento - cantidadGratisIncluidos;
            const cantidadDespuesDelRango = cantidadRequeridos - cantidadDeUsuariosSinDescuento;
            const costoDespuesDelLimite = cantidadDespuesDelRango * costoUsuarioExtraDespuesDeLimite;
            const costoAntesDelLimite = cantidadAntesDelRango * costoUsuarioExtra;
            return costoDespuesDelLimite + costoAntesDelLimite;
        }
    }
    const costo = Math.abs((cantidadGratisIncluidos - cantidadRequeridos) * costoUsuarioExtra);
    return costo;
}
export function calcularCostoPrimerAño(costoImplementacion, costoMembresia, costoTimbres, costoUsuarios) {
    return Math.round(costoImplementacion + costoMembresia + costoTimbres + costoUsuarios);
}
export function calcularCostoSegundoAño(costoMembresia, costoTimbres, costoUsuarios) {
    return Math.round(costoMembresia + costoTimbres + costoUsuarios);
}
export function calcularCostoConCambioDivisa(cantidadACambiar, precioMoneda) {
    return Math.round(cantidadACambiar / precioMoneda);
}
//# sourceMappingURL=CostoPaquete.js.map
/**
 * @author Raul Galindo
 * @description Responsabilidad: Retornar los costos relacionado con un paquete.
 */
export class CostoPaquete {
    calcularCostoImplementacion(costoActivacion, costoMigracion, costoCapacitacion, descuento, isPagoMensual = false) {
        const costoTotal = costoActivacion + costoMigracion + costoCapacitacion;
        const descuentoEnDecimal = descuento / 100;
        const numeroMeses = 12;
        if (isPagoMensual) {
            return costoTotal / numeroMeses;
        }
        return costoTotal * (1 - descuentoEnDecimal);
    }
    calcularCostoMembresia(costoBaseMensual, mesesDeRegalo, isPagoMensual = false) {
        const mesesDelAño = 12;
        if (isPagoMensual) {
            return costoBaseMensual;
        }
        return costoBaseMensual * (mesesDelAño - mesesDeRegalo);
    }
    calcularCostoTimbres(timbresRequeridos, timbresGratis, precioTimbreExtra) {
        let costoTotal = 0;
        if (timbresRequeridos > timbresGratis) {
            costoTotal = (timbresRequeridos - timbresGratis) * precioTimbreExtra;
            return costoTotal;
        }
        return costoTotal;
    }
    calcularCostoUsuario(cantidadRequeridos, cantidadGratisIncluidos, costoUsuarioExtra, hasPrecioVariable = false, costoUsuarioExtraDespuesDeLimite, cantidadDeUsuariosSinDescuento) {
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
    calcularCostoPrimerAño(costoImplementacion, costoMembresia, costoTimbres, costoUsuarios) {
        return Math.round(costoImplementacion + costoMembresia + costoTimbres + costoUsuarios);
    }
    calcularCostoConCambioDivisa(cantidadACambiar, precioMoneda) {
        return Math.round(cantidadACambiar / precioMoneda);
    }
}
//# sourceMappingURL=CostoPaquete.js.map
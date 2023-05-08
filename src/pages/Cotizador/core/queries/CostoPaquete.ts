/**
 * @author Raul Galindo
 * @description Responsabilidad: Retornar los costos relacionado con un paquete.
 */

export class CostoPaquete {
    calcularCostoImplementacion(
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

    calcularCostoMembresia(
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

    calcularCostoTimbres(
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

    calcularCostoUsuario(
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

    calcularCostoPrimerAño(
        costoImplementacion: number,
        costoMembresia: number,
        costoTimbres: number,
        costoUsuarios: number
    ): number {
        return Math.round(
            costoImplementacion + costoMembresia + costoTimbres + costoUsuarios
        )
    }

    calcularCostoConCambioDivisa(
        cantidadACambiar: number,
        precioMoneda: number
    ): number {
        return Math.round(cantidadACambiar / precioMoneda)
    }
}

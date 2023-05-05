export class Implementacion {
    public costoActivacion: number
    public costoCapacitacion: number
    public costoMigracion: number
    public pagoImplementacionMensual: boolean

    calcularCostoTotalImplementacion(
        costoActivacion: number,
        costoMigracion: number,
        costoCapacitacion: number,
        pagoImplementacionMensual: boolean = false
    ): number {
        const costoTotalImplementacion =
            costoActivacion + costoMigracion + costoCapacitacion

        if (pagoImplementacionMensual === false) {
            return costoTotalImplementacion * 0.9
        }
        return costoTotalImplementacion
    }
}

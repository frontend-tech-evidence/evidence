export class Capacitacion {
    public costoUsuarioAdicionalCapacitacion: number | string
    public costoHoraVirtualAdicionalCapacitacion: number
    public diasDeAsesorCapacitacion: number | string
    public usuariosIncluidosCapacitacion: number
    public horasIncluidasCapacitacion: number
    public horasDisponibleSemanalesCapacitacion: number

    constructor(
        costoUsuarioAdicionalCapacitacion: number | string,
        costoHoraVirtualAdicionalCapacitacion: number,
        diasDeAsesorCapacitacion: number | string,
        usuariosIncluidosCapacitacion: number,
        horasIncluidasCapacitacion: number,
        horasDisponibleSemanalesCapacitacion: number
    ) {
        this.costoUsuarioAdicionalCapacitacion =
            costoUsuarioAdicionalCapacitacion
        this.costoHoraVirtualAdicionalCapacitacion =
            costoHoraVirtualAdicionalCapacitacion
        this.diasDeAsesorCapacitacion = diasDeAsesorCapacitacion
        this.usuariosIncluidosCapacitacion = usuariosIncluidosCapacitacion
        this.horasIncluidasCapacitacion = horasIncluidasCapacitacion
        this.horasDisponibleSemanalesCapacitacion =
            horasDisponibleSemanalesCapacitacion
    }
}

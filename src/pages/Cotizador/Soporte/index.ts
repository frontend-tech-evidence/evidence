class Soporte {
    public rangoDisponibleSoporte: string
    public rangoPromedioDeRespuesta: string
    public upTime: number
    public cantAsesoriasEspecializadas: number
    public almacenaminetoAdicional: string

    constructor(
        rangoDisponibleSoporte: string,
        rangoPromedioDeRespuesta: string,
        upTime: number,
        cantAsesoriasEspecializadas: number,
        almacenaminetoAdicional: string
    ) {
        this.rangoDisponibleSoporte = rangoDisponibleSoporte
        this.rangoPromedioDeRespuesta = rangoPromedioDeRespuesta
        this.upTime = upTime
        this.cantAsesoriasEspecializadas = cantAsesoriasEspecializadas
        this.almacenaminetoAdicional = almacenaminetoAdicional
    }
}

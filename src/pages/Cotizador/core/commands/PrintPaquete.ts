/**
 * @author Raul Galindo
 * @description Responsabilidad: Imprime los datos de un paquete en el HTML
 */

interface Paquete {
    Nombre: string
    CostoBase: number
    // limites disponibles
    MaxUsuarios: number
    MaxSucursales: number
    MaxEmpleados: number
    // capacitacion
    DiasDeAsesorCapacitacion: string
    UsuariosIncluidosCapacitacion: number
    HorasIncluidasCapacitacion: number
    HorasDisponibleSemanalesCapacitacion: number
    // razon social
    CostoRazonSocial: string
    CostoUsuarioExtraRazonSocial: number
    // soporte
    CostoHoraVirtualAdicionalCapacitacion: string
    TiempoPromedioRespuesta: string
    HorarioAtencion: string
    UpTime: string
    CantAsesoriasEspecializadas: number
    AlmacenamientoAdicional: string
}

interface Paquetes {
    [key: string]: Paquete
}

export function printAll(objetoPaquetes: Paquetes) {
    const paquetes = Object.values(objetoPaquetes)

    paquetes.forEach((paquete) => {
        for (const propiedad in paquete) {
            const span = document.getElementById(
                `span${propiedad}${paquete.Nombre}`
            )
            if (span !== null) {
                span.textContent = paquete[propiedad]
            }
        }
    })
}

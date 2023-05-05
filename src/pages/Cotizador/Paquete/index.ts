import { Usuario } from '../Usuario'
import { Implementacion } from '../Implementacion'

export class Package {
    // paquete
    public name: string
    public costoBase: number
    public maxUsuarios: number
    public maxSucursales: number
    public maxEmpleados: number

    constructor(
        name: string,
        costoBase: number,
        maxUsuarios: number,
        maxSucursales: number,
        maxEmpleados: number
    ) {
        this.name = name
        this.costoBase = costoBase
        this.maxUsuarios = maxUsuarios
        this.maxSucursales = maxSucursales
        this.maxEmpleados = maxEmpleados
    }

    calcularCostoTotal() {
        const usuario = new Usuario()
        const implementacion = new Implementacion()

        return (
            usuario.calcularCosto(10, 1, 499) +
            implementacion.calcularCostoTotalImplementacion(
                9800,
                9800,
                9800,
                true
            )
        )
    }
}

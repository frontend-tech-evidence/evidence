class Package {
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
}

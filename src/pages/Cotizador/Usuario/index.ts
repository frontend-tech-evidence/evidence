export class Usuario {
    public cantidadUsuariosRequeridos: number
    public cantidadUsuariosGratisIncluidos: number
    public costoUsuarioExtra: number
    public costoUsuarioExtraDespuesDeLimite?: number
    public rangoPrincipalLimiteDeUsuarios: number

    constructor(
        cantidadUsuariosRequeridos: number,
        cantidadUsuariosGratisIncluidos: number,
        costoUsuarioExtra: number,
        costoUsuarioExtraDespuesDeLimite: number,
        rangoPrincipalLimiteDeUsuarios?: number
    ) {
        this.cantidadUsuariosRequeridos = cantidadUsuariosRequeridos
        this.cantidadUsuariosGratisIncluidos = cantidadUsuariosGratisIncluidos
        this.costoUsuarioExtra = costoUsuarioExtra
        this.costoUsuarioExtraDespuesDeLimite = costoUsuarioExtraDespuesDeLimite
        this.rangoPrincipalLimiteDeUsuarios = rangoPrincipalLimiteDeUsuarios
    }

    calcularCosto() {
        if (typeof this.rangoPrincipalLimiteDeUsuarios === 'number') {
            if (
                this.cantidadUsuariosRequeridos >
                this.rangoPrincipalLimiteDeUsuarios
            ) {
                const cantidadUsuariosAntesDelRango =
                    this.rangoPrincipalLimiteDeUsuarios -
                    this.cantidadUsuariosGratisIncluidos

                const cantidadUsuariosDespuesDelRango =
                    this.cantidadUsuariosRequeridos -
                    this.rangoPrincipalLimiteDeUsuarios

                const costoDespuesDelLimite =
                    cantidadUsuariosDespuesDelRango *
                    this.costoUsuarioExtraDespuesDeLimite

                const costoAntesDelLimite =
                    cantidadUsuariosAntesDelRango * this.costoUsuarioExtra

                return costoDespuesDelLimite + costoAntesDelLimite
            }
        }

        const costoUsuarios = Math.abs(
            (this.cantidadUsuariosGratisIncluidos -
                this.cantidadUsuariosRequeridos) *
                this.costoUsuarioExtra
        )

        return costoUsuarios
    }
}

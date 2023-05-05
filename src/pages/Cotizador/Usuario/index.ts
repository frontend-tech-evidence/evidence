export class Usuario {
    public cantidadUsuariosRequeridos: number
    public cantidadUsuariosGratisIncluidos: number
    public costoUsuarioExtra: number
    public costoUsuarioExtraDespuesDeLimite?: number
    public rangoPrincipalLimiteDeUsuarios?: number

    calcularCosto(
        cantidadUsuariosRequeridos: number,
        cantidadUsuariosGratisIncluidos: number,
        costoUsuarioExtra: number,
        costoUsuarioExtraDespuesDeLimite?: number,
        rangoPrincipalLimiteDeUsuarios?: number
    ): number {
        if (typeof rangoPrincipalLimiteDeUsuarios === 'number') {
            if (cantidadUsuariosRequeridos > rangoPrincipalLimiteDeUsuarios) {
                const cantidadUsuariosAntesDelRango =
                    rangoPrincipalLimiteDeUsuarios -
                    cantidadUsuariosGratisIncluidos

                const cantidadUsuariosDespuesDelRango =
                    cantidadUsuariosRequeridos - rangoPrincipalLimiteDeUsuarios

                const costoDespuesDelLimite =
                    cantidadUsuariosDespuesDelRango *
                    costoUsuarioExtraDespuesDeLimite

                const costoAntesDelLimite =
                    cantidadUsuariosAntesDelRango * costoUsuarioExtra

                return costoDespuesDelLimite + costoAntesDelLimite
            }
        }

        const costoUsuarios = Math.abs(
            (cantidadUsuariosGratisIncluidos - cantidadUsuariosRequeridos) *
                costoUsuarioExtra
        )

        return costoUsuarios
    }
}

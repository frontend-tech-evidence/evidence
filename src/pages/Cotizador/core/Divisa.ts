/**
 * @author Raul Galindo
 * @description Responsabilidad: Retornar transformaciones de divisas.
 */

export function cambiarDivisa(
    cantidadACambiar: number,
    precioMoneda: number
): number {
    return Math.round(cantidadACambiar / precioMoneda)
}

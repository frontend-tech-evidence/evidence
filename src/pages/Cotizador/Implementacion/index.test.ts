/**
 * @author Raul Galindo
 * @description Test for
 */

import { Implementacion } from './index'

describe('Calcular el costo total de implementacion', () => {
    it('Se agregan los costos sin descuento', () => {
        const implementacion = new Implementacion()
        expect(
            implementacion.calcularCostoTotalImplementacion(
                9800,
                9800,
                9800,
                true
            )
        ).toBe(29400)
    })

    it('Se agregan los costos con descuento del 10%', () => {
        const implementacion = new Implementacion()
        expect(
            implementacion.calcularCostoTotalImplementacion(
                9800,
                9800,
                9800,
                false
            )
        ).toBe(26460)
    })

    it('Se agregan los costos sin descuento del 10% con 19000', () => {
        const implementacion = new Implementacion()
        expect(
            implementacion.calcularCostoTotalImplementacion(
                19000,
                49000,
                29000,
                true
            )
        ).toBe(97000)
    })

    it('Se agregan los costos con descuento del 10% con 19000', () => {
        const implementacion = new Implementacion()
        expect(
            implementacion.calcularCostoTotalImplementacion(
                19000,
                49000,
                29000,
                false
            )
        ).toBe(87300)
    })
})

/**
 * @author Raul Galindo
 * @description Test for
 */

import { Package } from './index'

describe('Calcular el precio total', () => {
    describe('Paquete Grow', () => {
        it('Costo total del paquete grow correcto', () => {
            const pkg = new Package('grow', 2990, 14, 2, 29)
            expect(pkg.calcularCostoTotal()).toBe(33891)
        })
    })
})

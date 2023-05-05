/**
 * @author Raul Galindo
 * @description Test for
 */

import { Usuario } from './index'

describe('Obtener el precio total de usuarios', () => {
    it('Costo total por 1 usuario es correcto', () => {
        const usuario = new Usuario()
        expect(usuario.calcularCosto(1, 1, 499, 499)).toBe(0)
    })

    it('Costo total por 1 usuario con rango de 829 - 499 es correcto', () => {
        const usuario = new Usuario()
        expect(usuario.calcularCosto(1, 1, 829, 499, 49)).toBe(0)
    })

    it('Costo total por 50 usuario en 829 cada uno y 499 al pasar el limite de 49', () => {
        const usuario = new Usuario()
        expect(usuario.calcularCosto(50, 1, 829, 499, 49)).toBe(40291)
    })

    it('Costo total por 49 usuario en 829 cada uno y 499 al pasar el limite de 49', () => {
        const usuario = new Usuario()
        expect(usuario.calcularCosto(49, 1, 829, 499, 49)).toBe(39792)
    })

    it('Costo total por 55 usuario', () => {
        const usuario = new Usuario()
        expect(usuario.calcularCosto(55, 1, 829, 499, 49)).toBe(42786)
    })
})

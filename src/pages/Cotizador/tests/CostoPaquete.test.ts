/**
 * @author Raul Galindo
 * @description Test for
 */

import {
    calcularCostoImplementacion,
    calcularCostoMembresia,
    calcularCostoTimbres,
    calcularCostoUsuario,
    calcularCostoPrimerAño,
} from '../core/CostoPaquete.js'

import { cambiarDivisa } from '../core/Divisa.js'

describe('Calcular el costo total del paquete', () => {
    // Por falta de tiempo, faltan ahondar en los test,
    // pero como no es la primera version, confio, sin embargo,
    // siempre hay hide spots

    describe('🎨 Paquete Grow', () => {
        it('Todo en meses', () => {
            const costoImplementacion = calcularCostoImplementacion(
                9800,
                9800,
                9800,
                10,
                true
            )
            const costoMembresia = calcularCostoMembresia(2990, 1, true)
            const costoTimbres = calcularCostoTimbres(100, 100, 1)

            const costoUsuarios = calcularCostoUsuario(1, 1, 829, true, 499, 49)
            expect(
                // calcularCostoPrimerAño(
                //     costoImplementacion,
                //     costoMembresia,
                //     costoTimbres,
                //     costoUsuarios
                // )

                calcularCostoPrimerAño(
                    costoImplementacion,
                    costoMembresia,
                    costoTimbres,
                    costoUsuarios
                )
            ).toBe(5440)
        })
    })

    describe('🎨 Paquete Manufacturing', () => {
        it('Todo en meses y en dolares', () => {
            const costoImplementacion = calcularCostoImplementacion(
                19000,
                49000,
                29000,
                10,
                true
            )

            const costoMembresia = calcularCostoMembresia(14990, 1, true)

            const costoTimbres = calcularCostoTimbres(100, 100, 1)

            const costoUsuarios = calcularCostoUsuario(1, 1, 829, true, 499, 49)
            expect(
                cambiarDivisa(
                    calcularCostoPrimerAño(
                        costoImplementacion,
                        costoMembresia,
                        costoTimbres,
                        costoUsuarios
                    ),
                    16
                )
            ).toBe(1442)
        })
    })
})

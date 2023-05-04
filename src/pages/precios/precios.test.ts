/**
 * @author Raul Galindo
 */

import { calcularCosto } from './precios'

import 'jest-localstorage-mock'

describe('Calcular el precio total', () => {
    describe('Paquete Grow', () => {
        it('Costo de memebresia mensual se agrega al total correctamente', () => {
            expect(
                calcularCosto(
                    'grow', // packageType

                    // Parametros de timbres
                    100, // numTimbresGratis
                    100, // numTimbresAgregados
                    0.75, // precioTimbreExtra

                    // Parametros de Membresia
                    2990, // costoBaseMembresiaMensual
                    true // pagarMembresiaMensual
                ).precioTotalPrimerAño
            ).toBe(2990)
        })

        it('Costo de memebresia en 1 pago (se regala 1 mes gratis) se agrega al total correctamente', () => {
            expect(
                calcularCosto(
                    'grow', // packageType

                    // Parametros de timbres
                    100, // numTimbresGratis
                    100, // numTimbresAgregados
                    0.75, // precioTimbreExtra

                    // Parametros de Membresia
                    2990, // costoBaseMembresiaMensual
                    false // pagarMembresiaMensual
                ).precioTotalPrimerAño
            ).toBe(32890)
        })

        it('Costo de memebresia mensual + Pago de implementacion mensual + Costo de activacion sin migracion y capacitacion se agrega al total correctamente', () => {
            expect(
                calcularCosto(
                    'grow', // packageType

                    // Parametros de timbres
                    100, // numTimbresGratis
                    100, // numTimbresAgregados
                    0.75, // precioTimbreExtra

                    // Parametros de Membresia
                    2990, // costoBaseMembresiaMensual
                    true, // pagarMembresiaMensual

                    // Parametros de implementacion
                    9800, // costoActivacion
                    9800, // costoCapacitacion
                    false, // pagarCapacitacion
                    9800, // costoMigracion
                    false, // pagarMigracion
                    true // pagarImplementacionMensual
                ).precioTotalPrimerAño
            ).toBe(3806)
        })

        it('Costo de memebresia mensual + Pago de implementacion mensual + Costo de activacion, migracion y capacitacion se agrega al total correctamente', () => {
            expect(
                calcularCosto(
                    'grow', // packageType

                    // Parametros de timbres
                    100, // numTimbresGratis
                    100, // numTimbresAgregados
                    0.75, // precioTimbreExtra

                    // Parametros de Membresia
                    2990, // costoBaseMembresiaMensual
                    true, // pagarMembresiaMensual

                    // Parametros de implementacion
                    9800, // costoActivacion
                    9800, // costoCapacitacion
                    true, // pagarCapacitacion
                    9800, // costoMigracion
                    true, // pagarMigracion
                    true // pagarImplementacionMensual
                ).precioTotalPrimerAño
            ).toBe(5440)
        })

        it('Costo de memebresia mensual + Pago de implementacion en 1 pago (se aplica un 10% de descuento) + Costo de activacion sin migracion y capacitacion se agrega al total correctamente', () => {
            expect(
                calcularCosto(
                    'grow', // packageType

                    // Parametros de timbres
                    100, // numTimbresGratis
                    100, // numTimbresAgregados
                    0.75, // precioTimbreExtra

                    // Parametros de Membresia
                    2990, // costoBaseMembresiaMensual
                    true, // pagarMembresiaMensual

                    // Parametros de implementacion
                    9800, // costoActivacion
                    9800, // costoCapacitacion
                    false, // pagarCapacitacion
                    9800, // costoMigracion
                    false, // pagarMigracion
                    false // pagarImplementacionMensual
                ).precioTotalPrimerAño
            ).toBe(11810)
        })

        it('Costo de memebresia mensual + Pago de implementacion en 1 pago (se aplica un 10% de descuento) + Costo de activacion, migracion y capacitacion se agrega al total correctamente', () => {
            expect(
                calcularCosto(
                    'grow', // packageType

                    // Parametros de timbres
                    100, // numTimbresGratis
                    100, // numTimbresAgregados
                    0.75, // precioTimbreExtra

                    // Parametros de Membresia
                    2990, // costoBaseMembresiaMensual
                    true, // pagarMembresiaMensual

                    // Parametros de implementacion
                    9800, // costoActivacion
                    9800, // costoCapacitacion
                    true, // pagarCapacitacion
                    9800, // costoMigracion
                    true, // pagarMigracion
                    false // pagarImplementacionMensual
                ).precioTotalPrimerAño
            ).toBe(29450)
        })

        it('Costo de memebresia mensual + Pago de implementacion en 1 pago (se aplica un 10% de descuento) + Costo de activacion, migracion y capacitacion + Timbres gratis se agrega al total correctamente', () => {
            expect(
                calcularCosto(
                    'grow', // packageType

                    // Parametros de timbres
                    100, // numTimbresGratis
                    100, // numTimbresAgregados
                    0.75, // precioTimbreExtra

                    // Parametros de Membresia
                    2990, // costoBaseMembresiaMensual
                    true, // pagarMembresiaMensual

                    // Parametros de implementacion
                    9800, // costoActivacion
                    9800, // costoCapacitacion
                    true, // pagarCapacitacion
                    9800, // costoMigracion
                    true, // pagarMigracion
                    false // pagarImplementacionMensual
                ).precioTotalPrimerAño
            ).toBe(29450)
        })

        it('Costo de memebresia mensual + Pago de implementacion en 1 pago (se aplica un 10% de descuento) + Costo de activacion, migracion y capacitacion + 1 Timbre extra se agrega al total correctamente', () => {
            expect(
                calcularCosto(
                    'grow', // packageType

                    // Parametros de timbres
                    100, // numTimbresGratis
                    102, // numTimbresAgregados
                    0.75, // precioTimbreExtra

                    // Parametros de Membresia
                    2990, // costoBaseMembresiaMensual
                    true, // pagarMembresiaMensual

                    // Parametros de implementacion
                    9800, // costoActivacion
                    9800, // costoCapacitacion
                    true, // pagarCapacitacion
                    9800, // costoMigracion
                    true, // pagarMigracion
                    false // pagarImplementacionMensual
                ).precioTotalPrimerAño
            ).toBe(29451)
        })

        it('Costo de memebresia mensual + Pago de implementacion mensual + Costo de activacion, migracion y capacitacion + Timbres gratis + Usuario Gratis se agrega al total correctamente', () => {
            expect(
                calcularCosto(
                    'grow', // packageType

                    // Parametros de timbres
                    100, // numTimbresGratis
                    100, // numTimbresAgregados
                    0.75, // precioTimbreExtra

                    // Parametros de Membresia
                    2990, // costoBaseMembresiaMensual
                    true, // pagarMembresiaMensual

                    // Parametros de implementacion
                    9800, // costoActivacion
                    9800, // costoCapacitacion
                    true, // pagarCapacitacion
                    9800, // costoMigracion
                    true, // pagarMigracion
                    true, // pagarImplementacionMensual
                    1, // numUsuarios
                    0, // precioUsuarioDespuesLimite
                    499 // precioUsuarioExtra
                ).precioTotalPrimerAño
            ).toBe(5440)
        })

        it('Costo de memebresia mensual + Pago de implementacion mensual + Costo de activacion, migracion y capacitacion + Timbres gratis + 3 usuario se agrega al total correctamente', () => {
            expect(
                calcularCosto(
                    'grow', // packageType

                    // Parametros de timbres
                    100, // numTimbresGratis
                    100, // numTimbresAgregados
                    0.75, // precioTimbreExtra

                    // Parametros de Membresia
                    2990, // costoBaseMembresiaMensual
                    true, // pagarMembresiaMensual

                    // Parametros de implementacion
                    9800, // costoActivacion
                    9800, // costoCapacitacion
                    true, // pagarCapacitacion
                    9800, // costoMigracion
                    true, // pagarMigracion
                    true, // pagarImplementacionMensual
                    3, // numUsuarios
                    49, // numUsuariosLimites
                    0, // precioUsuarioDespuesLimite
                    499 // precioUsuarioExtra
                ).precioTotalPrimerAño
            ).toBe(6438)
        })

        it('Costo de memebresia mensual + Pago de implementacion mensual + Costo de activacion, migracion y capacitacion + Timbres gratis + 3 usuario en DOLARES se agrega al total correctamente', () => {
            expect(
                calcularCosto(
                    'grow', // packageType

                    // Parametros de timbres
                    100, // numTimbresGratis
                    100, // numTimbresAgregados
                    0.75, // precioTimbreExtra

                    // Parametros de Membresia
                    2990, // costoBaseMembresiaMensual
                    true, // pagarMembresiaMensual

                    // Parametros de implementacion
                    9800, // costoActivacion
                    9800, // costoCapacitacion
                    true, // pagarCapacitacion
                    9800, // costoMigracion
                    true, // pagarMigracion
                    true, // pagarImplementacionMensual
                    3, // numUsuarios
                    49, // numUsuariosLimites
                    0, // precioUsuarioDespuesLimite
                    499, // precioUsuarioExtra
                    1, // usuariosGratis
                    'usd', // tasaDeCambio
                    16 // precioDolar
                ).precioTotalPrimerAño
            ).toBe(402)
        })

        it('Costo de memebresia mensual + Pago de implementacion mensual + Costo de activacion, migracion y capacitacion + Timbres gratis + 3 usuario se agrega al total correctamente y se muestra lo que se pagara en el segundo año', () => {
            expect(
                calcularCosto(
                    'grow', // packageType

                    // Parametros de timbres
                    100, // numTimbresGratis
                    100, // numTimbresAgregados
                    0.75, // precioTimbreExtra

                    // Parametros de Membresia
                    2990, // costoBaseMembresiaMensual
                    true, // pagarMembresiaMensual

                    // Parametros de implementacion
                    9800, // costoActivacion
                    9800, // costoCapacitacion
                    true, // pagarCapacitacion
                    9800, // costoMigracion
                    true, // pagarMigracion
                    true, // pagarImplementacionMensual
                    3, // numUsuarios
                    49, // numUsuariosLimites
                    0, // precioUsuarioDespuesLimite
                    499 // precioUsuarioExtra
                ).precioTotalSegundoAño
            ).toBe(3988)
        })
    })

    describe('Paquete manufacturing', () => {
        it('Costo de memebresia mensual + Pago de implementacion mensual + Costo de activacion, migracion y capacitacion + Timbres gratis + 50 usuario se agrega al total correctamente', () => {
            expect(
                calcularCosto(
                    'manufacturing', // packageType

                    // Parametros de timbres
                    100, // numTimbresGratis
                    100, // numTimbresAgregados
                    0.75, // precioTimbreExtra

                    // Parametros de Membresia
                    8990, // costoBaseMembresiaMensual
                    true, // pagarMembresiaMensual

                    // Parametros de implementacion
                    19000, // costoActivacion
                    49000, // costoCapacitacion
                    true, // pagarCapacitacion

                    29000, // costoMigracion
                    true, // pagarMigracion

                    true, // pagarImplementacionMensual

                    // Parametros de usuarios
                    50, // numUsuarios
                    49, // numUsuariosLimites
                    499, // precioUsuarioDespuesLimite
                    829, // precioUsuario
                    1 // usuariosGratis
                ).precioTotalPrimerAño
            ).toBe(57364)
        })
    })

    describe('Paquete enterprise', () => {
        it('Costo de memebresia mensual + Pago de implementacion mensual + Costo de activacion, migracion y capacitacion + Timbres gratis + 50 usuario se agrega al total correctamente', () => {
            expect(
                calcularCosto(
                    'manufacturing', // packageType

                    // Parametros de timbres
                    100, // numTimbresGratis
                    100, // numTimbresAgregados
                    0.75, // precioTimbreExtra

                    // Parametros de Membresia
                    14990, // costoBaseMembresiaMensual
                    true, // pagarMembresiaMensual

                    // Parametros de implementacion
                    19000, // costoActivacion
                    49000, // costoCapacitacion
                    true, // pagarCapacitacion

                    29000, // costoMigracion
                    true, // pagarMigracion

                    true, // pagarImplementacionMensual

                    // Parametros de usuarios
                    50, // numUsuarios
                    49, // numUsuariosLimites
                    499, // precioUsuarioDespuesLimite
                    998, // precioUsuario
                    1 // usuariosGratis
                ).precioTotalPrimerAño
            ).toBe(71476)
        })
    })
})

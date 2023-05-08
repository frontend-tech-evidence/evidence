/**
 * @author Raul Galindo
 * @description Test for
 */
import { CostoPaquete } from '../core/queries/CostoPaquete';
describe('Calcular el costo total del paquete', () => {
    const costoPaquete = new CostoPaquete();
    // Por falta de tiempo, faltan ahondar en los test,
    // pero como no es la primera version, confio, sin embargo,
    // siempre hay hide spots
    describe('🎨 Paquete Grow', () => {
        it('Todo en meses', () => {
            const costoImplementacion = costoPaquete.calcularCostoImplementacion(9800, 9800, 9800, 10, true);
            const costoMembresia = costoPaquete.calcularCostoMembresia(2990, 1, true);
            const costoTimbres = costoPaquete.calcularCostoTimbres(100, 100, 1);
            const costoUsuarios = costoPaquete.calcularCostoUsuario(1, 1, 829, true, 499, 49);
            expect(
            // costoPaquete.calcularCostoPrimerAño(
            //     costoImplementacion,
            //     costoMembresia,
            //     costoTimbres,
            //     costoUsuarios
            // )
            costoPaquete.calcularCostoPrimerAño(costoImplementacion, costoMembresia, costoTimbres, costoUsuarios)).toBe(5440);
        });
    });
    describe('🎨 Paquete Manufacturing', () => {
        it('Todo en meses y en dolares', () => {
            const costoImplementacion = costoPaquete.calcularCostoImplementacion(19000, 49000, 29000, 10, true);
            const costoMembresia = costoPaquete.calcularCostoMembresia(14990, 1, true);
            const costoTimbres = costoPaquete.calcularCostoTimbres(100, 100, 1);
            const costoUsuarios = costoPaquete.calcularCostoUsuario(1, 1, 829, true, 499, 49);
            expect(costoPaquete.calcularCostoConCambioDivisa(costoPaquete.calcularCostoPrimerAño(costoImplementacion, costoMembresia, costoTimbres, costoUsuarios), 16)).toBe(1442);
        });
    });
});
//# sourceMappingURL=CostoPaquete.test.js.map
/**
 * @author Raul Galindo
 * @description Responsabilidad: Imprime los datos de un paquete en el HTML
 */
import { calcularCostoImplementacion, calcularCostoMembresia, calcularCostoTimbres, calcularCostoUsuario, calcularCostoPrimerAño, } from '../queries/CostoPaquete.js';
export function printAll(objetoPaquetes) {
    const costoImplementacion = calcularCostoImplementacion(9800, 9800, 9800, 10, true);
    const costoMembresia = calcularCostoMembresia(2990, 1, true);
    const costoTimbres = calcularCostoTimbres(100, 100, 1);
    const costoUsuarios = calcularCostoUsuario(1, 1, 829, true, 499, 49);
    calcularCostoPrimerAño(costoImplementacion, costoMembresia, costoTimbres, costoUsuarios);
}
//# sourceMappingURL=PrintPaquete.js.map
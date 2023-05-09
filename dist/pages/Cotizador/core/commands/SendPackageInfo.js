/**
 * @author Raul Galindo
 * @description Responsabilidad: Manda los datos de un paquete en el HTML
 */
// import {
//     calcularCostoImplementacion,
//     calcularCostoMembresia,
//     calcularCostoTimbres,
//     calcularCostoUsuario,
//     calcularCostoPrimerAño,
//     calcularCostoConCambioDivisa,
// } from '../queries/CostoPaquete.js'
import { paquetes } from '../../../../data/Paquetes.js';
export function SendPackageInfo(nombrePaquete) {
    const packageData = paquetes[nombrePaquete];
    console.log(packageData.Nombre);
}
//# sourceMappingURL=SendPackageInfo.js.map
/**
 * @author Raul Galindo
 * @description Responsabilidad: Manda los datos de un paquete en el HTML
 */
import { paquetes } from './Paquetes.js';
export function GetPaquete(nombrePaquete) {
    const packageData = paquetes[nombrePaquete];
    return packageData;
}
//# sourceMappingURL=GetPaquete.js.map
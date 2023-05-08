/**
 * @author Raul Galindo
 * @description Responsabilidad: Imprime los datos de un paquete en el HTML
 */
export function printAll(objetoPaquetes) {
    const paquetes = Object.values(objetoPaquetes);
    paquetes.forEach((paquete) => {
        for (const propiedad in paquete) {
            const span = document.getElementById(`span${propiedad}${paquete.Nombre}`);
            if (span !== null) {
                span.textContent = paquete[propiedad];
            }
        }
    });
}
//# sourceMappingURL=PrintPaquete.js.map
/**
 * @author Raul Galindo
 * @description Responsabilidad: Imprime los datos de un paquete en el HTML
 */
export class PrintPaquete {
    printAll(id, ...args) {
        const elemento = document.querySelectorAll(`.span${id}`);
        const cantidadElementos = elemento.length;
        const cantidadArgumentos = args.length;
        for (let i = 0; i < cantidadElementos && i < cantidadArgumentos; i++) {
            elemento[i].textContent = args[i]
                .toLocaleString()
                .replace(/\./g, ',');
        }
    }
}
//# sourceMappingURL=PrintPaquete.js.map
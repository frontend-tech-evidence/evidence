import { paquetes } from '../data/Paquetes.js';
class ItemTable extends HTMLElement {
    constructor() {
        super();
        const paquete = this.getAttribute('paquete');
        const paqueteSeleccionado = paquetes[paquete];
        // Render HTML
        this.innerHTML = ` 
           <span class="text-center text-gray-800"> 
            $${paqueteSeleccionado.costoUsuarioExtra}
        </span>
        `;
    }
    /**
     * Runs each time the element is appended to or moved in the DOM
     */
    connectedCallback() { }
    /**
     * Runs when the element is removed from the DOM
     */
    disconnectedCallback() { }
}
if ('customElements' in window) {
    customElements.define('item-table', ItemTable);
}
//# sourceMappingURL=ItemTable.js.map
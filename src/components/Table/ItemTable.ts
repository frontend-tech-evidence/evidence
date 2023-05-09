import { paquetes } from '../../data/Paquetes.js'

class ItemTable extends HTMLElement {
    constructor() {
        super()

        const paquete = this.getAttribute('paquete')
        const paqueteSeleccionado = paquetes[paquete]
        const atributo = this.getAttribute('atributo')

        // Render HTML
        this.innerHTML = ` 
           <span class="flex justify-center items-center text-center text-gray-800 text-sm"> 
           ${paqueteSeleccionado[atributo]}
        </span>
        `
    }

    /**
     * Runs each time the element is appended to or moved in the DOM
     */
    connectedCallback() {}

    /**
     * Runs when the element is removed from the DOM
     */
    disconnectedCallback() {}
}

if ('customElements' in window) {
    customElements.define('item-table', ItemTable)
}

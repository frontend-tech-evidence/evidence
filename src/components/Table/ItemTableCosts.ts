import { paquetes } from '../../data/Paquetes.js'
import { cambiarDivisa } from '../../pages/Cotizador/core/Divisa.js'

class ItemTableCosts extends HTMLElement {
    constructor() {
        super()

        let moneda = localStorage.getItem('moneda')

        if (moneda === null) {
            moneda = 'mxn'
        }

        const paquete = this.getAttribute('paquete')
        const paqueteSeleccionado = paquetes[paquete]
        const atributo = this.getAttribute('atributo')
        let dato = paqueteSeleccionado[atributo]

        if (typeof paqueteSeleccionado[atributo] === 'number') {
            dato = `$${paqueteSeleccionado[atributo]
                .toLocaleString()
                .replace(/\./g, ',')} ${moneda}`
        }

        // Render HTML
        this.innerHTML = ` 
           <span class="flex justify-center items-center text-center text-gray-800 text-sm">           
           ${dato}
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
    customElements.define('item-table-cost', ItemTableCosts)
}

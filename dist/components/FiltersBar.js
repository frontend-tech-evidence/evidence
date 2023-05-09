class FiltersBar extends HTMLElement {
    constructor() {
        super();
        const paquete = this.getAttribute('paquete');
        const titulo = this.getAttribute('titulo');
        // Render HTML
        this.innerHTML = ` 
            <span>Hola</span>
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
    customElements.define('filters-bar', FiltersBar);
}
//# sourceMappingURL=FiltersBar.js.map
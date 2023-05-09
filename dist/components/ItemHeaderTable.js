class ItemHeaderTable extends HTMLElement {
    constructor() {
        super();
        const texto = this.getAttribute('texto');
        // Render HTML
        this.innerHTML = ` 
           <span class="text-center text-gray-800"> ${texto} </span>
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
    customElements.define('item-header-table', ItemHeaderTable);
}
//# sourceMappingURL=ItemHeaderTable.js.map
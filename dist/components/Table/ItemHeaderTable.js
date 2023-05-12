class ItemHeaderTable extends HTMLElement {
    constructor() {
        super();
        const texto = this.getAttribute('texto');
        // Render HTML
        this.innerHTML = ` 
        <div class="flex w-[14rem] max-w-xs flex-col justify-center items-center gap-y-0 py-.5 px-6">
           <span class="text-center text-gray-800 text-sm"> ${texto} </span>           
        </div>
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
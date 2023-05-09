class SubheaderTable extends HTMLElement {
    constructor() {
        super();
        const paquete = this.getAttribute('paquete');
        const paqueteCapitalized = paquete.charAt(0).toUpperCase() + paquete.slice(1);
        const titulo = this.getAttribute('titulo');
        // Render HTML
        this.innerHTML = ` 
            <span
                id="modulos${paqueteCapitalized}"
                class="flex justify-center font-bold leading-6"
            >
                ${titulo}
                <svg
                    class="ml-0.5 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
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
    customElements.define('subheader-table', SubheaderTable);
}
//# sourceMappingURL=SubheaderTable.js.map
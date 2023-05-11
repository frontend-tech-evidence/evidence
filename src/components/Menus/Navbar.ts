class Navbar extends HTMLElement {
    constructor() {
        super()

        const texto = this.getAttribute('texto')
        const titulo = this.getAttribute('titulo')

        // Render HTML
        this.innerHTML = ` 
         
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
    customElements.define('navbar-menu', Navbar)
}

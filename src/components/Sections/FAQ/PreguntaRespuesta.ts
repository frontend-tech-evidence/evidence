class PreguntaRespuesta extends HTMLElement {
    constructor() {
        super()

        const pregunta = this.getAttribute('pregunta')
        const respuesta = this.getAttribute('respuesta')
        const idPregunta = this.getAttribute('idPregunta')

        // Render HTML
        this.innerHTML = ` 
           <div class="pt-6">
                <dt>
                    <!-- Boton -->
                    <button type="button" id="btn${idPregunta}" class="flex w-full items-start justify-between text-left text-gray-900 active:text-blue-500 hover:text-blue-500" aria-controls="faq-0" aria-expanded="false">
                        <span id="span${idPregunta}" class="text-xl font-semibold leading-7 text-gray-900 hover:text-blue-500">${pregunta}</span>
                        <!-- Iconos -->
                        <span class="ml-6 flex h-7 items-center">
                            <!-- Icono para abrir -->
                            <svg id="svgAbrir${idPregunta}" class="flex h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                            <!-- Icono para cerrar -->
                            <svg id="svgCerrar${idPregunta}" class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                            </svg>
                        </span>
                    </button>
                </dt>
                <!-- Descripcion -->
                <dd class="mt-2 pr-12 hidden" id="faq-0">
                    <p class="text-md leading-7 text-gray-600">
                        ${respuesta}
                    </p>
                </dd>
            </div>
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
    customElements.define('pregunta-respuesta', PreguntaRespuesta)
}

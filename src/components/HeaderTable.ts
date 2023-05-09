import {
    calcularCostoPrimerAño,
    calcularCostoImplementacion,
    calcularCostoMembresia,
    calcularCostoTimbres,
    calcularCostoUsuario,
    calcularCostoSegundoAño,
    calcularCostoConCambioDivisa,
} from '../pages/Cotizador/core/CostoPaquete.js'
import { paquetes } from '../data/Paquetes.js'

class HeaderTable extends HTMLElement {
    constructor() {
        super()

        const nombre = this.getAttribute('nombre')
        const paquete = paquetes[nombre]

        const costoImplementacion = calcularCostoImplementacion(
            paquete.costoActivacion,
            paquete.costoMigracion,
            paquete.costoCapacitacion,
            paquete.descuentoPorUnPago
        )

        const costoMembresia = calcularCostoMembresia(
            paquete.costoBase,
            paquete.mesesDeRegalo
        )

        const costoTimbres = calcularCostoTimbres(
            1, // timbres requeridos
            paquete.timbresGratisIncluidos,
            paquete.costoTimbreExtra
        )

        const costoUsuarios = calcularCostoUsuario(
            1, // cantidad requerida de usuarios
            paquete.usuariosGratisIncluidos,
            paquete.costoUsuarioExtra
        )

        const costoPrimerAño = calcularCostoPrimerAño(
            costoImplementacion,
            costoMembresia,
            costoTimbres,
            costoUsuarios
        )
            .toLocaleString()
            .replace(/\./g, ',')

        const costoSegundoAño = calcularCostoSegundoAño(
            costoMembresia,
            costoTimbres,
            costoUsuarios
        )
            .toLocaleString()
            .replace(/\./g, ',')

        const monedaSeleccionada = 'mxn'
        const modalidadDePagos = 'mes'

        // const costoConCambioDivisa = calcularCostoConCambioDivisa()

        // Render HTML
        this.innerHTML = `
        <!-- Titulo -->
        <div class="mb-4 flex flex-col items-center gap-y-1 px-4">
                <svg class="w-24" xmlns="http://www.w3.org/2000/svg" viewBox=" 0 0 512 512" fill="none">
                    <g clip-path="url(#clip0_1_4)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M511.997 256C511.997 397.386 397.383 512.003 256.003 512.003C114.617 512.003 0 397.386 0 256C0 114.617 114.617 -0.00299072 256.003 -0.00299072C397.383 -0.00299072 511.997 114.617 511.997 256Z"
                            fill="url(#paint0_linear_1_4)" />
                        <mask id="mask0_1_4" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="0"
                            y="-1" width="512" height="514">
                            <path
                                d="M512 256C512 397.386 397.392 512.003 256.003 512.003C114.62 512.003 0.00305176 397.386 0.00305176 256C0.00305176 114.617 114.62 -0.00299072 256.003 -0.00299072C397.392 -0.00299072 512 114.617 512 256Z"
                                fill="white" />
                        </mask>
                        <g mask="url(#mask0_1_4)">
                            <path d="M177.649 408.098H61.6571V241.317L177.649 131.332V408.098Z"
                                fill="#3B82F6" />
                            <path d="M177.649 131.332V408.098H450.252V240.461L177.649 131.332Z"
                                fill="url(#paint1_linear_1_4)" />
                            <path d="M159.669 203.286V515.026H495.021V308.817L159.669 203.286Z"
                                fill="url(#paint2_linear_1_4)" />
                            <path d="M177.649 131.332V408.098H450.252V240.461L177.649 131.332Z"
                                fill="url(#paint3_linear_1_4)" />
                            <path d="M159.669 203.286V515.026H495.021V308.817L159.669 203.286Z"
                                fill="url(#paint4_linear_1_4)" />
                            <path d="M159.669 515.026H16.9871V309.856L159.669 203.286V515.026Z"
                                fill="#3B82F6" />
                            <path d="M231.841 225.997L191.441 213.284V515.026H231.841V225.997Z"
                                fill="#3B82F6" />
                            <path d="M286.931 244.267L246.532 231.014V515.026H286.931V244.267Z"
                                fill="#3B82F6" />
                            <path d="M342.022 260.795L301.623 247.958V515.026H342.022V260.795Z"
                                fill="#3B82F6" />
                            <path d="M399.868 281.389L359.469 266.158V515.026H399.868V281.389Z"
                                fill="#3B82F6" />
                            <path d="M458.633 297.523L418.233 284.652V515.026H458.633V297.523Z"
                                fill="#3B82F6" />
                        </g>
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_1_4" x1="74.9805" y1="74.9814" x2="437.02"
                            y2="437.021" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#3B82F6" />
                            <stop offset="1" stop-color="white" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_1_4" x1="313.95" y1="131.332" x2="313.95"
                            y2="408.098" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="0.5654" stop-color="white" stop-opacity="0.4817" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_1_4" x1="327.345" y1="203.286" x2="327.345"
                            y2="515.027" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="0.5654" stop-color="white" stop-opacity="0.4817" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_1_4" x1="313.95" y1="131.332" x2="313.95"
                            y2="408.098" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="0.5654" stop-color="white" stop-opacity="0.4817" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_1_4" x1="327.345" y1="203.286" x2="327.345"
                            y2="515.027" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="0.5654" stop-color="white" stop-opacity="0.4817" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                        <clipPath id="clip0_1_4">
                            <rect width="512" height="512" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <div
                    class="flex items-center justify-center gap-x-1 text-center text-lg font-semibold leading-6 text-gray-900">
                    <div class="pt-2">                      
                        <span>${paquete.nombre}</span>                        
                    </div>
                </div>
            </div>

            <!-- Precios -->
            <div class="flex flex-col items-center gap-y-1 px-4">
                <!-- Etiqueta de precio normal -->
                <div class="flex flex-row items-center justify-center text-gray-900 dark:text-white">
                    <span class="text-4xl font-bold leading-6 text-black">${costoPrimerAño}</span>
                    <span class="ml-1 text-sm leading-6 text-gray-600">${monedaSeleccionada}</span>
                    <span class="ml-1 text-sm leading-6 text-gray-600">/${modalidadDePagos}</span>
                </div>

                <!-- Etiqueta de precio promocional -->
                <div class="mt-4 flex flex-col items-center gap-y-2">
                    <span class="w-[13rem] text-xs font-bold leading-6 text-black underline">Contrata hoy y
                        cuando quieras renovar
                        el 2° año te costara:</span>
                    <div class="flex flex-row items-center text-gray-900 dark:text-white">
                        <span class="text-lg font-bold leading-6 text-black">${costoSegundoAño}</span>
                        <span class="ml-1 text-sm leading-6 text-gray-600">${monedaSeleccionada}</span>
                        <span class="ml-1 text-sm leading-6 text-gray-600">/${modalidadDePagos}</span>                            
                    </div>

                    <!-- CTA -->
                    <div class="mt-3 flex flex-col gap-y-2">
                        <a id=btnCotizar${paquete.nombre} href="http://127.0.0.1:8000/contratar-paquete"
                            class="rounded-full bg-blue-600 px-8 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-blue-600 hover:ring-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">Obtener
                            Cotización Online
                            <span aria-hidden="true">
                                &rarr;</span></a>

                        <a id="btnContratar${paquete.nombre}" href="http://127.0.0.1:8000/contratar-paquete"
                            class="border-600 rounded-full border px-8 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 hover:ring-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">O
                            contrate ahora
                            <span aria-hidden="true">
                                &rarr;</span></a>
                    </div>

                    <!-------------------- Etiqueta para dar a conocer que ya no esta disponible -------------------->
                    <div>
                        <span id="error${paquete.nombre}"
                            class="mt-4 hidden cursor-not-allowed rounded-3xl bg-blue-300 px-3 py-2.5 text-center text-sm text-white">
                            No disp. para tus filtros
                            actuales</span>
                    </div>
                </div>
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
    customElements.define('header-table', HeaderTable)
}

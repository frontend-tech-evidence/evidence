import {
    calcularCostoPrimerAño,
    calcularCostoImplementacion,
    calcularCostoMembresia,
    calcularCostoTimbres,
    calcularCostoUsuario,
    calcularCostoSegundoAño,
} from '../../pages/Cotizador/core/CostoPaquete.js'

import { cambiarDivisa } from '../../pages/Cotizador/core/Divisa.js'
import { paquetes } from '../../data/Paquetes.js'

class HeaderTable extends HTMLElement {
    constructor() {
        super()

        const nombre = this.getAttribute('nombre')
        const textColor = this.getAttribute('textColor')
        const smallTextColor = this.getAttribute('smallTextColor')
        const textColorBtn2 = this.getAttribute('textColorBtn2')
        const bgColorBtn1 = this.getAttribute('bgColorBtn1')
        const borderColorBtn2 = this.getAttribute('borderColorBtn2')
        const textColorBtn1 = this.getAttribute('textColorBtn1')
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

        // const costoConCambioDivisa = cambiarDivisa()

        // Render HTML
        this.innerHTML = `       
        <!-- Titulo -->
        <div class="mb-4 flex flex-col items-center gap-y-1 px-4">
                    
        <img class="w-10" src="/src/assets/evidence-logos/${paquete.iconName}" alt="Icono de paquete ${paquete.nombre}"/>

                <div
                    class="flex items-center justify-center gap-x-1 text-center text-sm font-semibold leading-6 text-${textColor}">
                    <div class="pt-2">                                              
                        <span>${paquete.nombre}</span>                        
                    </div>
                </div>
            </div>

            <!-- Precios -->
            <div class="flex flex-col items-center gap-y-1 px-4">               
                <!-- Etiqueta de precio normal -->
                <div class="flex flex-row items-center justify-center text-${textColor}">
                    <span class="text-[1.9rem] font-bold leading-6 text-${textColor}">$${costoPrimerAño}</span>                    
                    <span class="ml-1 text-xs leading-6 text-${smallTextColor}">/${modalidadDePagos}</span>
                </div>

                <!-- Etiqueta de precio promocional -->
                <div class="mt-4 flex flex-col items-center gap-y-2">
                    <span class="w-[13rem] text-xs font-bold leading-6 text-${textColor} underline">Contrata hoy y
                        el 2° año te costara:</span>
                    <div class="flex flex-row items-center text-${textColor}">
                        <span class="text-md font-bold leading-6 text-${textColor}">$${costoSegundoAño}</span>                        
                        <span class="ml-1 text-xs leading-6 text-${smallTextColor}">/${modalidadDePagos}</span>                            
                    </div>

                    <!-- CTA -->
                    <div class="mt-3 flex flex-col gap-y-2">
                        <a id=btnCotizar${paquete.nombre} href="http://127.0.0.1:8000/contratar-paquete"
                            class="rounded-full bg-${bgColorBtn1} px-8 py-2 text-sm font-semibold text-${textColorBtn1} shadow-sm ring-1 ring-inset ring-blue-600 hover:ring-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">Obtener
                            Cotización Online
                            <span aria-hidden="true">
                                &rarr;</span></a>

                        <a id="btnContratar${paquete.nombre}" href="http://127.0.0.1:8000/contratar-paquete"
                            class="border-${borderColorBtn2} rounded-full capitalize border px-8 py-2 text-sm font-semibold text-${textColorBtn2} shadow-sm ring-1 ring-inset hover:ring-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">O
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

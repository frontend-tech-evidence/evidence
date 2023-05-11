class SwitchInput extends HTMLElement {
    constructor() {
        super()

        const texto = this.getAttribute('texto')
        const textoTrue = this.getAttribute('textoTrue')
        const textoFalse = this.getAttribute('textoFalse')
        const inputName = this.getAttribute('inputName')
        const descuento = this.getAttribute('descuento')
        const inputNameCapitalized =
            inputName.charAt(0).toUpperCase() + inputName.slice(1)

        // Render HTML
        this.innerHTML = ` 
        <div class="flex flex-col gap-y-1">
                  <!-- Pregunta -->
                  <span class="text-sm font-semibold leading-6 text-gray-900">${texto}</span>
            <div class="mt-2 flex flex-col justify-center gap-y-1 relative">
                <!------- Etiqueta de descuento ------->
                <span id="input${inputNameCapitalized}Label"
                    class="hidden text-[.6rem] capitalize font-bold rounded-full py-1 px-2 text-blue-500 absolute top-[-19px] left-[-30px] underline">${descuento}</span>
            
                <div class="flex flex-row gap-x-2 items-center">
                    <span class="text-sm font-medium">${textoFalse}</span>
        
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer" id="input${inputNameCapitalized}" value="1" />
                        <div
                        class="w-16 h-8 px-3.5 py-2 shadow-sm ring-gray-300 bg-white border-gray-300 border peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:left-[.5rem] after:top-1 after:bg-blue-500 after:rounded-full after:h-[1.5rem] after:w-6 after:transition-all">
                        </div>
                    </label>

                    <span class="text-sm font-medium">${textoTrue}</span>
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
    customElements.define('switch-input', SwitchInput)
}

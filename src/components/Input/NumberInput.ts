class NumberInput extends HTMLElement {
    constructor() {
        super()

        const texto = this.getAttribute('texto')
        const inputName = this.getAttribute('inputName')
        const inputNameCapitalized =
            inputName.charAt(0).toUpperCase() + inputName.slice(1)

        // Render HTML
        this.innerHTML = ` 
            <div class="flex flex-col">
                  <!-- Pregunta -->
                  <span class="text-sm font-semibold leading-6 text-gray-900">${texto}</span>
  
                  <!-- Buttons -->
                <div
                    class="bg-white mt-2 w-min rounded-full flex items-center border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
                    <!-- Button - -->
                    <button id="decrement${inputNameCapitalized}"
                      class="w-6 text-center rounded-full border-0 px-1.5 py-1 text-gray-900">
                      -
                    </button>
  
                    <!-- Input -->
                    <input type="number" value="1" id="input${inputNameCapitalized}" autocomplete="${inputNameCapitalized}"
                      class="text-center w-[4.5rem] rounded-full border-0 px-3.5 text-gray-900" />
  
                    <!-- Button + -->
                    <button id="increment${inputNameCapitalized}"
                      class="w-6 text-center rounded-full border-0 px-1.5 py-1 text-gray-900">
                      +
                    </button>
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
    customElements.define('number-input', NumberInput)
}

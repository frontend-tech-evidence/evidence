class CheckboxInput extends HTMLElement {
    constructor() {
        super()

        const texto = this.getAttribute('texto')
        const inputName = this.getAttribute('inputName')

        // Render HTML
        this.innerHTML = `                         
                    <div
                        class="text-sm font-bold leading-6 text-gray-900 flex gap-x-2 items-center justify-center">
                        <input type="checkbox"
                            class="hidden w-3.5 rounded-sm border-gray-300 text-blue-600 focus:ring-blue-600">
                        <input type="checkbox" name="${inputName}Checkbox"
                            id="${inputName}Checkbox" checked="" autocompleted="">
                        <span> ${texto}</span>
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
    customElements.define('checkbox-input', CheckboxInput)
}

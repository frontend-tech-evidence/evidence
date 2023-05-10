class Herov1 extends HTMLElement {
    constructor() {
        super()

        const texto = this.getAttribute('texto')
        const titulo = this.getAttribute('titulo')

        // Render HTML
        this.innerHTML = ` 
           <div class="relative isolate overflow-hidden bg-blue-700">
                <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div class="mx-auto max-w-2xl text-center">
                        <h2 class="text-3xl font-bold tracking-tight capitalize text-white sm:text-5xl">${titulo}</h2>
                        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-white font-semibold text-2xl">${texto}</p>                    
                    </div>
                </div>
                <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fill-opacity="0.9" />
                    <defs>
                    <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                        <stop stop-color="#000000" />                        
                    </radialGradient>
                    </defs>
                </svg>
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
    customElements.define('hero-v1', Herov1)
}

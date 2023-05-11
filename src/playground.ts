function hideShowElement(idSubmodule: string) {
    const subModulo = document.getElementById(idSubmodule)

    if (subModulo.classList.contains('hidden')) {
        subModulo.classList.remove('hidden')
    } else {
        subModulo.classList.add('hidden')
    }
}

function handleDecrementClick(inputId: string = '', minValue: number = 0) {
    const input = document.getElementById(inputId) as HTMLInputElement

    if (parseInt(input.value) > minValue) {
        input.value = (parseInt(input.value) - 1).toString()
        localStorage.setItem(input.id, input.value)
    }
}

function handleIncrementClick(inputId: string = '', maxValue: number = 0) {
    const input = document.getElementById(inputId) as HTMLInputElement

    if (parseInt(input.value) < maxValue) {
        input.value = (parseInt(input.value) + 1).toString()
        localStorage.setItem(input.id, input.value)
    }
}

function validarLimiteInputNumerico(
    valorIntroducido: number = 0,
    cantidadMaxima: number = 0,
    cantidadMinima: number = 0
) {
    if (typeof valorIntroducido === 'number') {
        if (
            valorIntroducido <= cantidadMaxima ||
            valorIntroducido >= cantidadMinima
        ) {
            return true
        }
    }

    return false
}

function reloadValoresAnterioresDeInputsDelLocalStorage(
    idDelValorEnLocalStorage: string,
    idDelInput: string = '',
    tipoDeInput: string | undefined = undefined
) {
    const input = document.getElementById(idDelInput) as HTMLInputElement

    if (Boolean(localStorage.getItem(idDelValorEnLocalStorage))) {
        if (tipoDeInput === 'number') {
            input.value = localStorage.getItem(idDelValorEnLocalStorage)!
        } else if (tipoDeInput === 'checkbox') {
            input.checked = JSON.parse(
                localStorage.getItem(idDelValorEnLocalStorage) || 'false'
            )
        }
    }
}

function guardarValoresDeInputsEnLocalStorage(
    idFuturoDelValorEnLocalStorage: string,
    idDelInput: string = '',
    tipoDeInput: string | undefined = undefined
) {
    const input = document.getElementById(idDelInput) as HTMLInputElement

    if (tipoDeInput === 'number') {
        localStorage.setItem(idFuturoDelValorEnLocalStorage, input.value)
    } else if (tipoDeInput === 'checkbox') {
        if (input.checked) {
            localStorage.setItem(idFuturoDelValorEnLocalStorage, 'checked')
        } else {
            localStorage.setItem(idFuturoDelValorEnLocalStorage, 'not checked')
        }
    }
}

window.document.addEventListener('click', (e) => {
    if ((e.target as Element).closest('#btnProductos')) {
        hideShowElement('childProductos')
    }

    if ((e.target as Element).closest('#btnPorqueEvidence')) {
        hideShowElement('childPorqueEvidence')
    }

    if ((e.target as Element).closest('#btnRecursos')) {
        hideShowElement('childRecursos')
    }

    if ((e.target as Element).closest('#btnFiltros')) {
        hideShowElement('childFiltros')
    }

    if ((e.target as Element).closest('#incrementUsuarios')) {
        handleIncrementClick('inputUsuarios', 10000)
    }

    if ((e.target as Element).closest('#decrementUsuarios')) {
        handleDecrementClick('inputUsuarios', 1)
    }

    if ((e.target as Element).closest('#incrementSucursales')) {
        handleIncrementClick('inputSucursales', 10000)
    }

    if ((e.target as Element).closest('#decrementSucursales')) {
        handleDecrementClick('inputSucursales', 1)
    }

    if ((e.target as Element).closest('#incrementEmpleados')) {
        handleIncrementClick('inputEmpleados', 10000)
    }

    if ((e.target as Element).closest('#decrementEmpleados')) {
        handleDecrementClick('inputEmpleados', 1)
    }

    if ((e.target as Element).closest('#incrementTimbres')) {
        handleIncrementClick('inputTimbres', 10000)
    }

    if ((e.target as Element).closest('#decrementTimbres')) {
        handleDecrementClick('inputTimbres', 1)
    }

    if ((e.target as Element).closest('#inputUsuarios')) {
        validarLimiteInputNumerico()
    }
})

reloadValoresAnterioresDeInputsDelLocalStorage(
    'inputUsuarios',
    'inputUsuarios',
    'number'
)

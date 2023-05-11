function hideShowElement(idSubmodule) {
    const subModulo = document.getElementById(idSubmodule);
    if (subModulo.classList.contains('hidden')) {
        subModulo.classList.remove('hidden');
    }
    else {
        subModulo.classList.add('hidden');
    }
}
function handleDecrementClick(inputId = '', minValue = 0) {
    const input = document.getElementById(inputId);
    if (parseInt(input.value) > minValue) {
        input.value = (parseInt(input.value) - 1).toString();
        localStorage.setItem(input.id, input.value);
    }
}
function handleIncrementClick(inputId = '', maxValue = 0) {
    const input = document.getElementById(inputId);
    if (parseInt(input.value) < maxValue) {
        input.value = (parseInt(input.value) + 1).toString();
        localStorage.setItem(input.id, input.value);
    }
}
function validarLimiteInputNumerico(valorIntroducido = 0, cantidadMaxima = 0, cantidadMinima = 0) {
    if (typeof valorIntroducido === 'number') {
        if (valorIntroducido <= cantidadMaxima ||
            valorIntroducido >= cantidadMinima) {
            return true;
        }
    }
    return false;
}
function reloadValoresAnterioresDeInputsDelLocalStorage(idDelValorEnLocalStorage, idDelInput = '', tipoDeInput = undefined) {
    const input = document.getElementById(idDelInput);
    if (Boolean(localStorage.getItem(idDelValorEnLocalStorage))) {
        if (tipoDeInput === 'number') {
            input.value = localStorage.getItem(idDelValorEnLocalStorage);
        }
        else if (tipoDeInput === 'checkbox') {
            input.checked = JSON.parse(localStorage.getItem(idDelValorEnLocalStorage) || 'false');
        }
    }
}
function guardarValoresDeInputsEnLocalStorage(idFuturoDelValorEnLocalStorage, idDelInput = '', tipoDeInput = undefined) {
    const input = document.getElementById(idDelInput);
    if (tipoDeInput === 'number') {
        localStorage.setItem(idFuturoDelValorEnLocalStorage, input.value);
    }
    else if (tipoDeInput === 'checkbox') {
        if (input.checked) {
            localStorage.setItem(idFuturoDelValorEnLocalStorage, 'checked');
        }
        else {
            localStorage.setItem(idFuturoDelValorEnLocalStorage, 'not checked');
        }
    }
}
window.document.addEventListener('click', (e) => {
    if (e.target.closest('#btnProductos')) {
        hideShowElement('childProductos');
    }
    if (e.target.closest('#btnPorqueEvidence')) {
        hideShowElement('childPorqueEvidence');
    }
    if (e.target.closest('#btnRecursos')) {
        hideShowElement('childRecursos');
    }
    if (e.target.closest('#btnFiltros')) {
        hideShowElement('childFiltros');
    }
    if (e.target.closest('#incrementUsuarios')) {
        handleIncrementClick('inputUsuarios', 10000);
    }
    if (e.target.closest('#decrementUsuarios')) {
        handleDecrementClick('inputUsuarios', 1);
    }
    if (e.target.closest('#incrementSucursales')) {
        handleIncrementClick('inputSucursales', 10000);
    }
    if (e.target.closest('#decrementSucursales')) {
        handleDecrementClick('inputSucursales', 1);
    }
    if (e.target.closest('#incrementEmpleados')) {
        handleIncrementClick('inputEmpleados', 10000);
    }
    if (e.target.closest('#decrementEmpleados')) {
        handleDecrementClick('inputEmpleados', 1);
    }
    if (e.target.closest('#incrementTimbres')) {
        handleIncrementClick('inputTimbres', 10000);
    }
    if (e.target.closest('#decrementTimbres')) {
        handleDecrementClick('inputTimbres', 1);
    }
    if (e.target.closest('#inputUsuarios')) {
        validarLimiteInputNumerico();
    }
});
reloadValoresAnterioresDeInputsDelLocalStorage('inputUsuarios', 'inputUsuarios', 'number');
//# sourceMappingURL=playground.js.map
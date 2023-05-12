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
    // 'inputUsuarios',
    // 'inputUsuarios',
    // 'number'
    const input = document.getElementById(idDelInput);
    if (Boolean(localStorage.getItem(idDelValorEnLocalStorage))) {
        if (tipoDeInput === 'number') {
            input.value = localStorage.getItem(idDelValorEnLocalStorage);
        }
        else if (tipoDeInput === 'checkbox') {
            if (localStorage.getItem(idDelValorEnLocalStorage) === '1') {
                input.checked = false;
            }
            else {
                input.checked = true;
            }
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
function updateNumberInput(id, minValue, maxValue) {
    const input = document.getElementById(id);
    if (input !== null) {
        input.value = Math.min(Math.max(parseInt(input.value) || 0, minValue), maxValue).toString();
        window.localStorage.setItem(id, input.value);
    }
}
// Recarga el ultimo valor seleccionado de la moneda por el usuario antes de recargar o volver a abrir la pagina.
function reloadLastCurrencyValue() {
    const actualCurrency = window.localStorage.getItem('moneda');
    const monedaUSD = document.getElementById('monedaUSD');
    const monedaMXN = document.getElementById('monedaMXN');
    if (!actualCurrency) {
        window.localStorage.setItem('moneda', 'mxn');
    }
    else {
        // USD click classes changes
        // usd
        monedaUSD.classList.toggle('bg-blue-500', actualCurrency === 'usd');
        monedaUSD.classList.toggle('text-white', actualCurrency === 'usd');
        // mxn
        monedaUSD.classList.toggle('text-blue-500', actualCurrency !== 'usd');
        monedaUSD.classList.toggle('border', actualCurrency !== 'usd');
        monedaUSD.classList.toggle('border-blue-500', actualCurrency !== 'usd');
        // MXN click classes changes
        // mxn
        monedaMXN.classList.toggle('bg-blue-500', actualCurrency !== 'usd');
        monedaMXN.classList.toggle('text-white', actualCurrency !== 'usd');
        // usd.
        monedaMXN.classList.toggle('text-blue-500', actualCurrency === 'usd');
        monedaMXN.classList.toggle('border', actualCurrency === 'usd');
        monedaMXN.classList.toggle('border-blue-500', actualCurrency === 'usd');
    }
}
// Se usa para casos especificos donde solo deseas guardar o actualizar un valor.
function saveAndUpdateLocalStorage(id, value) {
    window.localStorage.setItem(id, value);
}
const inputsSwitches = ['inputImplementacion', 'inputMembresia'];
function updateSwitchInput(id) {
    const input = document.getElementById(`input${id}`);
    const inputLabel = document.getElementById(`input${id}Label`);
    if (input.checked === false) {
        window.localStorage.setItem(`input${id}`, '1');
        inputLabel.classList.remove('hidden');
        inputLabel.classList.add('flex');
    }
    else {
        window.localStorage.setItem(`input${id}`, '12');
        inputLabel.classList.remove('flex');
        inputLabel.classList.add('hidden');
    }
}
function monedaLoad() {
    const currency = localStorage.getItem('moneda').toUpperCase();
    const elementosMoneda = document.querySelectorAll('.moneda');
    elementosMoneda.forEach((elemento) => {
        elemento.textContent = `${currency}`;
    });
}
window.document.addEventListener('click', (e) => {
    // Moneda
    if (e.target.matches('#monedaUSD')) {
        saveAndUpdateLocalStorage('moneda', 'usd');
        reloadLastCurrencyValue();
        monedaLoad();
    }
    if (e.target.matches('#monedaMXN')) {
        saveAndUpdateLocalStorage('moneda', 'mxn');
        reloadLastCurrencyValue();
        monedaLoad();
    }
    // ------- Switches -------
    if (e.target.closest('#inputImplementacion')) {
        updateSwitchInput('Implementacion');
    }
    if (e.target.closest('#inputMembresia')) {
        updateSwitchInput('Membresia');
    }
    // ------- Buttons -------
    if (e.target.closest('#btnProductos')) {
        hideShowElement('childProductos');
    }
    if (e.target.closest('#btnPorqueEvidence')) {
        hideShowElement('childPorqueEvidence');
    }
    if (e.target.closest('#btnRecursos')) {
        hideShowElement('childRecursos');
    }
    // -------- Tabla --------
    if (e.target.closest('#preciosFather')) {
        hideShowElement('preciosChildren');
    }
    if (e.target.closest('#modulosFather')) {
        hideShowElement('modulosChildren');
    }
    if (e.target.closest('#soporteFather')) {
        hideShowElement('soporteChildren');
    }
    if (e.target.closest('#otrosFather')) {
        hideShowElement('otrosChildren');
    }
    if (e.target.closest('#capacitacionesFather')) {
        hideShowElement('capacitacionesChildren');
    }
    // -------- inputs --------
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
    // Tabla
    if (e.target.closest('#modulosCRM')) {
        hideShowElement('submodulosCRM');
    }
    // Tabla
    if (e.target.closest('#modulosPuntoDeVenta')) {
        hideShowElement('submodulosPuntoDeVenta');
    }
    // Tabla
    if (e.target.closest('#modulosGestionDeVentas')) {
        hideShowElement('submodulosGestionDeVentas');
    }
    // Tabla
    if (e.target.closest('#modulosCompras')) {
        hideShowElement('submodulosCompras');
    }
    // Tabla
    if (e.target.closest('#modulosCreditoYCobranza')) {
        hideShowElement('submodulosCreditoYCobranza');
    }
    // Tabla
    if (e.target.closest('#modulosBancos')) {
        hideShowElement('submodulosBancos');
    }
    // Tabla
    if (e.target.closest('#modulosAlmacenes')) {
        hideShowElement('submodulosAlmacenes');
    }
    // Tabla
    if (e.target.closest('#modulosGestionDeVentasInstitucional')) {
        hideShowElement('submodulosGestionDeVentasInstitucional');
    }
    // Tabla
    if (e.target.closest('#modulosAlmacenesInstitucional')) {
        hideShowElement('submodulosAlmacenesInstitucional');
    }
    // Tabla
    if (e.target.closest('#modulosPagos')) {
        hideShowElement('submodulosPagos');
    }
    // Tabla
    if (e.target.closest('#modulosServicios')) {
        hideShowElement('submodulosServicios');
    }
    // Tabla
    if (e.target.closest('#modulosContabilidad')) {
        hideShowElement('submodulosContabilidad');
    }
    // Tabla
    if (e.target.closest('#modulosFiscalMexico')) {
        hideShowElement('submodulosFiscalMexico');
    }
    // Tabla
    if (e.target.closest('#modulosNomina')) {
        hideShowElement('submodulosNomina');
    }
    // Tabla
    if (e.target.closest('#modulosGestionDeVentasAutomaticas')) {
        hideShowElement('submodulosGestionDeVentasAutomaticas');
    }
    // Tabla
    if (e.target.closest('#modulosComprasProfesionales')) {
        hideShowElement('submodulosComprasProfesionales');
    }
    // Tabla
    if (e.target.closest('#modulosBlindajeYPrevencionFiscal')) {
        hideShowElement('submodulosBlindajeYPrevencionFiscal');
    }
    // Tabla
    if (e.target.closest('#modulosRecursosHumanos')) {
        hideShowElement('submodulosRecursosHumanos');
    }
    // Tabla
    if (e.target.closest('#modulosLogistica')) {
        hideShowElement('submodulosLogistica');
    }
    // Tabla
    if (e.target.closest('#modulosActivosFijos')) {
        hideShowElement('submodulosActivosFijos');
    }
    // Tabla
    if (e.target.closest('#modulosProyectos')) {
        hideShowElement('submodulosProyectos');
    }
    // Tabla
    if (e.target.closest('#modulosActividades')) {
        hideShowElement('submodulosActividades');
    }
    // Tabla
    if (e.target.closest('#modulosEvidencias')) {
        hideShowElement('submodulosEvidencias');
    }
    // Tabla
    if (e.target.closest('#modulosMantenimiento')) {
        hideShowElement('submodulosMantenimiento');
    }
    // Tabla
    if (e.target.closest('#modulosManufactura')) {
        hideShowElement('submodulosManufactura');
    }
    // Tabla
    if (e.target.closest('#modulosModulosYServiciosEspecializados')) {
        hideShowElement('submodulosModulosYServiciosEspecializados');
    }
});
window.document.addEventListener('change', (e) => {
    if (e.target.closest('#inputUsuarios')) {
        updateNumberInput('inputUsuarios', 1, 10000);
    }
    if (e.target.closest('#inputSucursales')) {
        updateNumberInput('inputSucursales', 1, 10000);
    }
    if (e.target.closest('#inputEmpleados')) {
        updateNumberInput('inputEmpleados', 1, 10000);
    }
});
monedaLoad();
reloadValoresAnterioresDeInputsDelLocalStorage('inputUsuarios', 'inputUsuarios', 'number');
reloadValoresAnterioresDeInputsDelLocalStorage('inputEmpleados', 'inputEmpleados', 'number');
reloadValoresAnterioresDeInputsDelLocalStorage('inputSucursales', 'inputSucursales', 'number');
reloadValoresAnterioresDeInputsDelLocalStorage('inputTimbres', 'inputTimbres', 'number');
reloadValoresAnterioresDeInputsDelLocalStorage('inputImplementacion', 'inputImplementacion', 'checkbox');
reloadValoresAnterioresDeInputsDelLocalStorage('inputMembresia', 'inputMembresia', 'checkbox');
updateSwitchInput('Implementacion');
updateSwitchInput('Membresia');
updateNumberInput('inputUsuarios', 1, 10000);
updateNumberInput('inputSucursales', 1, 10000);
updateNumberInput('inputEmpleados', 1, 10000);
updateNumberInput('inputTimbres', 1, 10000);
reloadLastCurrencyValue();
//# sourceMappingURL=playground.js.map
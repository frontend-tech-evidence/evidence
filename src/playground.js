/** ------------------------------------------------------------------------------------------------ */
/** -------------------------------------------  Imports ------------------------------------------- */
/** ------------------------------------------------------------------------------------------------ */

import { erpPrices } from './data/paquetes.js'

/** ****************************************         Importante Abajo        **************************************************** */

/**
 * @author Raul galindo
 * @description Debido a que se importa el @include('includes.include-scripts') en todas las html, se
 * debe de poner un id a la pagina donde quieres cargar este js que lo identifique para que asi se
 * cargue este script en esa pagina.
 */

/** ****************************************         Importante  Arriba       **************************************************** */

// Buscar el elemento con el ID
const parent = document.getElementById('precios')

/** ---------------------------------------------------------------------------------------------------------------- */
/** -------------------------------------------  Inits & Event Listeners ------------------------------------------- */
/** ---------------------------------------------------------------------------------------------------------------- */

// Verificar si el elemento existe
if (parent) {
    /** -------------------------------------------------------------------------------------------------- */
    /** -------------------------------------------  Variables y Constantes ------------------------------ */

    /** -------------------------------------------------------------------------------------------------- */

    // Define una matriz de variables que representan todos los diferentes inputs de la aplicacion.
    const inputs = [
        inputUsuarios,
        inputEmpleados,
        inputSucursales,
        inputTimbres,
        inputPagoInstalacion,
        inputPagoRenta,
    ]

    const inputsSwitches = [inputPagoInstalacion, inputPagoRenta]

    /** ----------------------------------------------------------------------------------- */
    /** ------------------------------  Métodos ------------------------------------------- */
    /** ----------------------------------------------------------------------------------- */

    /**
     * @author Raul Galindo
     *
     * @description Esta función lo que hace es recargar en los inputs los valores que se guardaron
     * en su ultima vista en el localStorage, y si no hay alguno, se inicializa tomando el valor que
     * tiene el input en el HTML.
     * ---- ATENCIÓN: Hay que poner a cada input en el HTML su atributo "value", no se te olvide. ----
     */

    function reloadLastLocalStorageValuesInInputs(inputs) {
        for (const input of inputs) {
            const inputValue = document.getElementById(input.id)
            const storedValue = window.localStorage.getItem(input.id)

            if (storedValue) {
                inputValue.value = storedValue
            } else {
                window.localStorage.setItem(input.id, inputValue.value)
            }
        }
    }

    // Recarga los últimos valores de los inputs de tipo Switch y también su etiqueta de descuenta
    // (en caso de existir) seleccionados por el usuario antes de recargar o volver a abrir la pagina.
    function reloadLastLocalStorageValuesInSwitchInputs(inputs) {
        for (const input of inputs) {
            const inputValue = document.getElementById(input.id)
            const storedValue = window.localStorage.getItem(input.id)
            const inputLabel = document.getElementById(`${input.id}Label`)

            if (storedValue && storedValue === '12') {
                inputValue.checked = true
                inputLabel.classList.remove('flex')
                inputLabel.classList.add('hidden')
            } else {
                inputLabel.classList.remove('hidden')
                inputLabel.classList.add('flex')
            }
        }
    }

    // Recarga el ultimo valor seleccionado de la moneda por el usuario antes de recargar o volver a abrir la pagina.
    function reloadLastCurrencyValue() {
        const actualCurrency = window.localStorage.getItem('moneda')
        const monedaUSD = document.getElementById('monedaUSD')
        const monedaMXN = document.getElementById('monedaMXN')

        if (!actualCurrency) {
            window.localStorage.setItem('moneda', 'mxn')
        } else {
            // USD click classes changes
            // usd
            monedaUSD.classList.toggle('bg-blue-500', actualCurrency === 'usd')
            monedaUSD.classList.toggle('text-white', actualCurrency === 'usd')

            // mxn
            monedaUSD.classList.toggle(
                'text-blue-500',
                actualCurrency !== 'usd'
            )
            monedaUSD.classList.toggle('border', actualCurrency !== 'usd')
            monedaUSD.classList.toggle(
                'border-blue-500',
                actualCurrency !== 'usd'
            )

            // MXN click classes changes
            // mxn
            monedaMXN.classList.toggle('bg-blue-500', actualCurrency !== 'usd')
            monedaMXN.classList.toggle('text-white', actualCurrency !== 'usd')
            // usd.
            monedaMXN.classList.toggle(
                'text-blue-500',
                actualCurrency === 'usd'
            )
            monedaMXN.classList.toggle('border', actualCurrency === 'usd')
            monedaMXN.classList.toggle(
                'border-blue-500',
                actualCurrency === 'usd'
            )
        }
    }

    // Esconde y muestra elementos que no necesitan guardar valores pasados o recargarlos, solo
    // se necesitan esconder o mostrar en ese momento.
    function hideShowElement(id, firstClass = 'hidden', secondClass = 'flex') {
        const element = document.getElementById(id)
        if (element.classList.contains(firstClass)) {
            element.classList.remove(firstClass)
            element.classList.add(secondClass)
        } else {
            element.classList.remove(secondClass)
            element.classList.add(firstClass)
        }
    }

    function hideShowElementHidden(id) {
        const element = document.getElementById(id)
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden')
        } else {
            element.classList.add('hidden')
        }
    }

    // Actualizar el valor de un elemento input en el documento HTML,
    function updateInput(id) {
        const input = document.getElementById(id)
        window.localStorage.setItem(id, input.value)
    }

    // Actualizar el valor de un elemento input de tipo checkbox en el documento HTML,
    function updateSwitchInput(id) {
        const input = document.getElementById(id)
        const inputLabel = document.getElementById(`${input.id}Label`)
        if (input.checked === false) {
            window.localStorage.setItem(id, '1')
            inputLabel.classList.remove('hidden')
            inputLabel.classList.add('flex')
        } else {
            window.localStorage.setItem(id, '12')
            inputLabel.classList.remove('flex')
            inputLabel.classList.add('hidden')
        }
    }

    // Actualizar el valor de un elemento input de tipo number en el documento HTML, asegurándose
    // de que el valor esté dentro de un rango específico definido por minValue y maxValue.
    function updateNumberInput(id, minValue, maxValue) {
        const input = document.getElementById(id)
        input.value = Math.min(
            Math.max(parseInt(input.value) || 0, minValue),
            maxValue
        )
        window.localStorage.setItem(id, input.value)
    }

    // Reduce el valor de un elemento input en el documento HTML, siempre y cuando el
    // valor actual del input sea mayor que el valor mínimo especificado por minValue.
    function handleDecrementClick(input, minValue) {
        if (input.value > minValue) {
            input.value = parseInt(input.value) - 1
            window.localStorage.setItem(input.id, input.value)
        }
    }

    // Incrementa el valor de un elemento input en el documento HTML, siempre y cuando el
    // valor actual del input sea mayor que el valor mínimo especificado por minValue.
    function handleIncrementClick(input, maxValue) {
        if (input.value < maxValue) {
            input.value = parseInt(input.value) + 1
            window.localStorage.setItem(input.id, input.value)
        }
    }

    // Se usa para casos especificos donde solo deseas guardar o actualizar un valor.
    function saveAndUpdateLocalStorage(id, value) {
        window.localStorage.setItem(id, value)
    }

    function calculatePrice(
        packageType = '',
        numTimbresGratis = 0,
        numTimbresAgregados = 0,
        precioTimbreExtra = 0,
        // Parametros de Membresia
        costoBaseMembresiaMensual = 0,
        pagarMembresiaMensual = false,
        // Parametros de implementacion
        costoActivacion = 0,
        costoCapacitacion = 0,
        pagarCapacitacion = true,
        costoMigracion = 0,
        pagarMigracion = true,
        pagarImplementacionMensual = false,
        // Parametros de usuarios
        numUsuarios = 0,
        numUsuariosLimites = 49,
        precioUsuarioDespuesLimite = 0,
        precioUsuario = 0,
        usuariosGratis = 1,
        // Parametro de cambio de moneda
        tasaDeCambio = 'mxn',
        precioDolar = 16
    ) {
        // ------------------------ Membresia ------------------------
        let costoBaseFija = costoBaseMembresiaMensual
        let costoBaseMembresiaFinal = costoBaseMembresiaMensual
        if (!pagarMembresiaMensual) {
            costoBaseMembresiaFinal = Number(costoBaseMembresiaMensual) * 11
        }
        // ------------------------ Implementacion ------------------------
        // -------- Capacitacion --------
        let costoCapacitacionFinal = 0
        if (packageType === 'grow' || packageType === 'start') {
            if (pagarCapacitacion) {
                costoCapacitacionFinal = costoCapacitacion
            } else {
                costoCapacitacionFinal = 0
            }
        } else {
            costoCapacitacionFinal = costoCapacitacion
        }
        // -------- Migracion --------
        let costoMigracionFinal = 0
        if (packageType === 'grow' || packageType === 'grow') {
            if (pagarMigracion) {
                costoMigracionFinal = costoMigracion
            } else {
                costoMigracionFinal = 0
            }
        } else {
            costoMigracionFinal = costoMigracion
        }
        let costoImplementacionFinal =
            costoActivacion + costoCapacitacionFinal + costoMigracionFinal
        if (!pagarImplementacionMensual) {
            costoImplementacionFinal *= 0.9
        } else {
            costoImplementacionFinal /= 12
        }
        // ------------------------ Timbres ------------------------
        let costoTimbresFijo = precioTimbreExtra
        let costoTimbres = 0
        if (numTimbresGratis > numTimbresAgregados) {
            costoTimbres = 0
        } else {
            costoTimbres =
                (Number(numTimbresAgregados) - Number(numTimbresGratis)) *
                Number(precioTimbreExtra)
        }
        // ------------------------ Usuarios ------------------------
        let costoUsuarioAux = precioUsuario
        let costoUsuariosFinales =
            precioUsuario * (numUsuarios - usuariosGratis)
        if (packageType === 'manufacturing' || packageType === 'enterprise') {
            if (numUsuarios > numUsuariosLimites) {
                costoUsuarioAux = precioUsuarioDespuesLimite
                let numUsuariosExtras = numUsuarios - numUsuariosLimites
                let costoUsuariosExtras =
                    numUsuariosExtras * precioUsuarioDespuesLimite
                let costoUsuariosNormales =
                    (numUsuariosLimites - usuariosGratis) * precioUsuario
                costoUsuariosFinales =
                    costoUsuariosExtras + costoUsuariosNormales
            }
        }
        // ------------------------ Total primer año ------------------------
        let precioTotalPrimerAño = Math.floor(
            costoTimbres +
                costoBaseMembresiaFinal +
                costoImplementacionFinal +
                costoUsuariosFinales
        )
        // ------------------------ Total segundo año ------------------------
        if (!pagarMembresiaMensual) {
            costoBaseMembresiaFinal = Number(costoBaseMembresiaMensual) * 12
        }
        let precioTotalSegundoAño = Math.floor(
            costoTimbres + costoBaseMembresiaFinal + costoUsuariosFinales
        )
        // ------------------------ Tasa de cambio ------------------------
        if (tasaDeCambio === 'usd') {
            precioTotalPrimerAño = Math.floor(
                precioTotalPrimerAño / precioDolar
            )
            precioTotalSegundoAño = Math.floor(
                precioTotalSegundoAño / precioDolar
            )
            costoCapacitacionFinal = Math.floor(
                costoCapacitacionFinal / precioDolar
            )
            costoMigracion = Math.floor(costoMigracion / precioDolar)
            costoMigracionFinal = Math.floor(costoMigracionFinal / precioDolar)
            costoCapacitacion = Math.floor(costoCapacitacion / precioDolar)
            costoUsuariosFinales = Math.floor(
                costoUsuariosFinales / precioDolar
            )
            costoActivacion = Math.floor(costoActivacion / precioDolar)
            costoImplementacionFinal = Math.floor(
                costoImplementacionFinal / precioDolar
            )
            costoBaseMembresiaFinal = Math.floor(
                costoBaseMembresiaFinal / precioDolar
            )
            costoBaseFija = Math.floor(costoBaseFija / precioDolar)
            precioUsuario = Math.floor(precioUsuario / precioDolar)
            costoUsuarioAux = Math.floor(costoUsuarioAux / precioDolar)
            costoBaseMembresiaFinal = Math.floor(
                costoBaseMembresiaFinal / precioDolar
            )
            costoTimbresFijo = costoTimbresFijo / precioDolar
        }

        const precios = {
            precioTotalPrimerAño,
            precioTotalSegundoAño,
            costoCapacitacionFinal,
            costoCapacitacionFinal,
            costoMigracion,
            costoCapacitacion,
            costoUsuariosFinales,
            costoActivacion,
            costoImplementacionFinal,
            costoBaseMembresiaFinal,
            precioUsuario,
            costoUsuarioAux,
            costoBaseFija,
            costoTimbresFijo,
            packageType,
            numTimbresGratis,
            precioTimbreExtra,
            tasaDeCambio,
        }

        return precios
    }

    function checkLimits(maxUsuarios, maxEmpleados, maxSucursales) {
        const inputUsuarios = document.getElementById('inputUsuarios').value
        const inputEmpleados = document.getElementById('inputEmpleados').value
        const inputSucursales = document.getElementById('inputSucursales').value

        if (
            inputUsuarios > maxUsuarios ||
            inputSucursales > maxSucursales ||
            inputEmpleados > maxEmpleados
        ) {
            return false
        }
        return true
    }

    // Calcula y actualiza los precios finales mostrados en la página en función de las entradas
    // del usuario y los precios del paquete.
    function updatePrices(erpPrices) {
        let paqueteGanador = 'grow'

        const inputUsuarios = window.localStorage.getItem('inputUsuarios')
        const inputTimbres = window.localStorage.getItem('inputTimbres')
        const inputCapacitacion = document.getElementById(
            'capacitacionCheckbox'
        )
        const inputMigracion = document.getElementById('migracionCheckbox')
        const inputPagoInstalacion = document.getElementById(
            'inputPagoInstalacion'
        )
        const inputPagoRenta = document.getElementById('inputPagoRenta')

        let migracionCheck = false
        let capacitacionCheck = false
        let pagarMembresiaMensual = false
        let pagarImplementacionMensual = false

        if (inputCapacitacion.checked) {
            capacitacionCheck = true
        }

        if (inputMigracion.checked) {
            migracionCheck = true
        }

        if (inputPagoRenta.checked) {
            pagarMembresiaMensual = true
        }

        if (inputPagoInstalacion.checked) {
            pagarImplementacionMensual = true
        }

        localStorage.setItem('paqueteGanador', paqueteGanador)
        const currency = localStorage.getItem('moneda')

        // 3- Mostrar precios de ese ganador
        const precioTotal = calculatePrice(
            paqueteGanador, // packageType

            // Parametros de timbres
            erpPrices.categories.servicios[paqueteGanador].timbres
                .timbresIncluidos, // numTimbresGratis
            inputTimbres, // numTimbresAgregados
            erpPrices.categories.servicios[paqueteGanador].timbres
                .costoTimbreExtra, // precioTimbreExtra

            // Parametros de Membresia
            erpPrices.categories.servicios[paqueteGanador].costoBase, // costoBaseMembresiaMensual
            pagarMembresiaMensual, // pagarMembresiaMensual

            // Parametros de implementacion
            erpPrices.categories.servicios[paqueteGanador].costosExtra
                .costoActivacion, // costoActivacion
            erpPrices.categories.servicios[paqueteGanador].costosExtra
                .costoCapacitacion, // costoCapacitacion
            capacitacionCheck, // pagarCapacitacion
            erpPrices.categories.servicios[paqueteGanador].costosExtra
                .costoMigracion, // costoMigracion
            migracionCheck, // pagarMigracion
            pagarImplementacionMensual, // pagarImplementacionMensual
            inputUsuarios, // numUsuarios
            erpPrices.categories.servicios[paqueteGanador].numUsuariosLimites, // numUsuariosLimites
            erpPrices.categories.servicios[paqueteGanador]
                .precioPorUsuarioDespuesDeLimite, // precioUsuarioDespuesLimite
            erpPrices.categories.servicios[paqueteGanador].precioPorUsuario, //precioUsuario
            erpPrices.categories.servicios[paqueteGanador].usuariosGratis, // usuariosGratis
            // Parametro de cambio de moneda
            currency, // tasaDeCambio
            erpPrices.precioDolar // precioDolar
        )

        window.localStorage.setItem('paqueteGanador', paqueteGanador)
        window.localStorage.setItem(
            'precioTotalSegundoAnioPaqueteSeleccionado',
            precioTotal.precioTotalSegundoAño
        )
        window.localStorage.setItem(
            'precioTotalPaqueteSeleccionado',
            precioTotal.precioTotalPrimerAño
        )
        window.localStorage.setItem(
            'costoUsuarioExtra',
            precioTotal.costoUsuarioAux
        )

        // Agregar el precio actual en los spans
        const sufijoPagos = pagarMembresiaMensual === true ? '/mes' : '/año'

        // Agregar los sufijos de pagos en los spans
        const elementosPagos = document.querySelectorAll('.spanPagos')
        elementosPagos.forEach((elemento) => {
            elemento.textContent = `${sufijoPagos}`
        })

        const elementosMoneda = document.querySelectorAll('.spanMoneda')
        elementosMoneda.forEach((elemento) => {
            elemento.textContent = `${currency}`
        })

        const elementosCapacitacion = document.querySelectorAll(
            '.spanPrecioCapacitacion'
        )
        elementosCapacitacion.forEach((elemento) => {
            elemento.textContent = precioTotal.costoCapacitacionFinal
                .toLocaleString()
                .replace(/\./g, ',')
        })

        const precioPorUsuario = document.querySelector('.spanPrecioPorUsuario')
        precioPorUsuario.textContent = `$${precioTotal.precioUsuario}`

        const maxUsuarios = document.querySelector('.spanMaxUsuarios')
        maxUsuarios.textContent = `${erpPrices.categories.servicios[paqueteGanador].maxUsuarios}`

        const maxSucursales = document.querySelector('.spanMaxSucursales')
        maxSucursales.textContent = `${erpPrices.categories.servicios[paqueteGanador].maxSucursales}`

        const maxEmpleados = document.querySelector('.spanMaxEmpleados')
        maxEmpleados.textContent = `${erpPrices.categories.servicios[paqueteGanador].maxEmpleados}`

        const timbresIncluidos = document.querySelector('.spanTimbresIncluidos')
        timbresIncluidos.textContent = `${erpPrices.categories.servicios[paqueteGanador].timbres.timbresIncluidos}`

        const costoTimbreExtra = document.querySelector('.spanCostoTimbreExtra')
        costoTimbreExtra.textContent = `$${precioTotal.costoTimbresFijo.toFixed(
            2
        )}`

        const elementosPrecioFinal =
            document.querySelectorAll('.spanPrecioFinal')
        elementosPrecioFinal.forEach((elemento) => {
            elemento.textContent = `$${precioTotal.precioTotalPrimerAño
                .toLocaleString()
                .replace(/\./g, ',')}`
        })

        const elementosPrecioSegundoAnio = document.querySelectorAll(
            '.spanPrecioSegundoAnio'
        )

        elementosPrecioSegundoAnio.forEach((elemento) => {
            elemento.textContent = `$${precioTotal.precioTotalSegundoAño
                .toLocaleString()
                .replace(/\./g, ',')}`
        })

        const precioActivacion = document.querySelector('.spanActivacion')
        precioActivacion.textContent = `$${precioTotal.costoActivacion
            .toLocaleString()
            .replace(/\./g, ',')}`

        const spanCapacitacion = document.querySelector('.spanCapacitacion')
        spanCapacitacion.textContent = `$${precioTotal.costoCapacitacion
            .toLocaleString()
            .replace(/\./g, ',')}`

        const spanPrecioMigracion = document.querySelector('.spanMigracion')
        spanPrecioMigracion.textContent = `$${precioTotal.costoMigracion
            .toLocaleString()
            .replace(/\./g, ',')}
    `

        const spanPagoImplementacion = document.querySelector(
            '.spanPagoImplementacion'
        )

        const precioImplementacionAux = parseInt(
            precioTotal.costoImplementacionFinal
        )

        const sufijoAuxImplementacion =
            pagarImplementacionMensual === true
                ? '/mes'
                : '/unico pago (descuento aplicado)'

        spanPagoImplementacion.textContent = `$${precioImplementacionAux
            .toLocaleString()
            .replace(/\./g, ',')}`

        const precioAnualFinal =
            precioTotal.costoBaseMembresiaFinal * 12 +
            precioTotal.costoUsuariosFinales

        const costoTotal = document.querySelector('.costoTotal')
        costoTotal.textContent = `$${precioAnualFinal
            .toLocaleString()
            .replace(/\./g, ',')}`

        const elementosNombrePaquete = document.querySelectorAll('.packageType')
        elementosNombrePaquete.forEach((elemento) => {
            const texto = precioTotal.packageType
            elemento.textContent =
                texto.charAt(0).toUpperCase() + texto.slice(1)
        })

        // Costos aparte

        const costoBaseTotal = document.querySelector('.costoBaseTotal')
        costoBaseTotal.textContent = `$${precioTotal.costoBaseFija
            .toLocaleString()
            .replace(/\./g, ',')}`

        // Soporte
        const atencion = document.querySelector('.spanAtencion')
        atencion.textContent = `${erpPrices.categories.servicios[paqueteGanador].soporte.atencion}`

        const upTime = document.querySelector('.spanUpTime')
        upTime.textContent = `${erpPrices.categories.servicios[paqueteGanador].soporte.upTime}`

        const tiempoPromedioDeRespuesta = document.querySelector(
            '.spanTiempoPromedioDeRespuesta'
        )
        tiempoPromedioDeRespuesta.textContent = `${erpPrices.categories.servicios[paqueteGanador].soporte.tiempoPromedioDeRespuesta}`

        // capacitacion
        const usuariosIncluidos = document.querySelector(
            '.spanUsuariosIncluidos'
        )
        usuariosIncluidos.textContent = `${erpPrices.categories.servicios[paqueteGanador].capacitacion.usuariosIncluidos}`

        const horasIncluidas = document.querySelector('.spanHorasIncluidas')
        horasIncluidas.textContent = `${erpPrices.categories.servicios[paqueteGanador].capacitacion.horasIncluidas}`

        const horasDisponiblesSemana = document.querySelector(
            '.spanHorasDisponiblesSemana'
        )
        horasDisponiblesSemana.textContent = `${erpPrices.categories.servicios[paqueteGanador].capacitacion.horasDisponiblesSemana}`

        const horaVirtualAdicional = document.querySelector(
            '.spanHoraVirtualAdicional'
        )
        horaVirtualAdicional.textContent = `${erpPrices.categories.servicios[paqueteGanador].capacitacion.horaVirtualAdicional}`

        const precioPorCapacitacionUsuariosExtras = document.querySelector(
            '.spanPrecioPorCapacitacionUsuariosExtras'
        )
        precioPorCapacitacionUsuariosExtras.textContent = `${erpPrices.categories.servicios[paqueteGanador].capacitacion.precioPorCapacitacionUsuariosExtras}`

        const diasDeProfesionalesEnfocados = document.querySelector(
            '.spanDiasDeProfesionalesEnfocados'
        )
        diasDeProfesionalesEnfocados.textContent = `${erpPrices.categories.servicios[paqueteGanador].capacitacion.diasDeProfesionalesEnfocados}`

        // otros
        const numeroAsesoriasEspecialistas = document.querySelector(
            '.spanNumeroAsesoriasEspecialistas'
        )
        numeroAsesoriasEspecialistas.textContent = `${erpPrices.categories.servicios[paqueteGanador].otros.numeroAsesoriasEspecialistas}`

        const almacenamientoAdicional = document.querySelector(
            '.spanAlmacenamientoAdicional'
        )
        almacenamientoAdicional.textContent = `${erpPrices.categories.servicios[paqueteGanador].otros.almacenamientoAdicional}`

        const horasDeDesarrolloIncluidas = document.querySelector(
            '.spanHorasDeDesarrolloIncluidas'
        )
        horasDeDesarrolloIncluidas.textContent = `${erpPrices.categories.servicios[paqueteGanador].otros.horasDeDesarrolloIncluidas}`

        const upgrateVersion = document.querySelector('.spanUpgrateVersion')
        upgrateVersion.textContent = `${erpPrices.categories.servicios[paqueteGanador].otros.upgrateVersion}`

        // Razon social
        const precioPorRazon = document.querySelector('.spanPrecioPorRazon')
        precioPorRazon.textContent = `${erpPrices.categories.servicios[paqueteGanador].razonSocial.precioPorRazon}`

        const precioUsuarioAdicional = document.querySelector(
            '.spanPrecioUsuarioAdicional'
        )
        precioUsuarioAdicional.textContent = `${erpPrices.categories.servicios[paqueteGanador].razonSocial.precioUsuarioAdicional}`
    }

    function mostrarSoloPaqueteSeleccionado() {
        const paqueteGanador = window.localStorage.getItem('paqueteGanador')
        const tablaGrow = document.getElementById('tablaGrow')
        const tablaInstitutional = document.getElementById('tablaInstitutional')
        const tablaManufacturing = document.getElementById('tablaManufacturing')

        if (paqueteGanador === 'grow') {
            if (tablaGrow.classList.contains('hidden')) {
                tablaGrow.classList.remove('hidden')
                tablaGrow.classList.add('flex')
            }

            if (tablaInstitutional.classList.contains('flex')) {
                tablaInstitutional.classList.remove('flex')
                tablaInstitutional.classList.add('hidden')
            }

            if (tablaManufacturing.classList.contains('flex')) {
                tablaManufacturing.classList.remove('flex')
                tablaManufacturing.classList.add('hidden')
            }
        }

        if (paqueteGanador === 'institutional') {
            if (tablaInstitutional.classList.contains('hidden')) {
                tablaInstitutional.classList.remove('hidden')
                tablaInstitutional.classList.add('flex')
            }

            if (tablaGrow.classList.contains('flex')) {
                tablaGrow.classList.remove('flex')
                tablaGrow.classList.add('hidden')
            }

            if (tablaManufacturing.classList.contains('flex')) {
                tablaManufacturing.classList.remove('flex')
                tablaManufacturing.classList.add('hidden')
            }
        }

        if (paqueteGanador === 'manufacturing') {
            if (tablaManufacturing.classList.contains('hidden')) {
                tablaManufacturing.classList.remove('hidden')
                tablaManufacturing.classList.add('flex')
            }

            if (tablaGrow.classList.contains('flex')) {
                tablaGrow.classList.remove('flex')
                tablaGrow.classList.add('hidden')
            }

            if (tablaInstitutional.classList.contains('flex')) {
                tablaInstitutional.classList.remove('flex')
                tablaInstitutional.classList.add('hidden')
            }
        }
    }

    //   function quotePackage(pkgName) {
    //   }

    function buyPackage(pkgName) {
        // const packageSelected = document.getElementById(`spanPrice${pkgName}`);

        // spanPriceInstitutional;
        // spanPriceInstitutionalRenew;
        console.log('Aun no creada la logica.')
    }

    // Eventos onChange
    window.document.addEventListener('change', (e) => {
        if (e.target.matches('#inputEspecialidad')) {
            updatePrices(erpPrices)
        }

        if (e.target.matches('#capacitacionCheckbox')) {
            updateNumberInput('inputUsuarios', 1, 10000)
            updatePrices(erpPrices)
        }

        if (e.target.matches('#migracionCheckbox')) {
            updateNumberInput('inputUsuarios', 1, 10000)
            updatePrices(erpPrices)
        }

        if (e.target.matches('#inputUsuarios')) {
            updateNumberInput('inputUsuarios', 1, 10000)
            updatePrices(erpPrices)
        }

        if (e.target.matches('#inputEmpleados')) {
            updateNumberInput('inputEmpleados', 1, 10000)
            updatePrices(erpPrices)
        }

        if (e.target.matches('#inputSucursales')) {
            updateNumberInput('inputSucursales', 1, 10000)
            updatePrices(erpPrices)
        }

        if (e.target.matches('#inputTimbres')) {
            updateNumberInput('inputTimbres', 1, 10000)
            updatePrices(erpPrices)
        }

        // Categoria
        if (e.target.matches('#inputCategoria')) {
            updateInput('inputCategoria')
            updatePrices(erpPrices)
        }
    })

    // Eventos onClick
    window.document.addEventListener('click', (e) => {
        if (e.target.closest('#btnVerPaquete')) {
            hideShowElementHidden('paqueteRecomendado')
            mostrarSoloPaqueteSeleccionado()
        }

        // Botones para modulos
        if (e.target.closest('#crmModulo')) {
            hideShowElementHidden('crmSubmodulos')
        }

        if (e.target.closest('#puntoDeVentaModulo')) {
            hideShowElementHidden('puntoDeVentaSubmodulos')
        }

        if (e.target.closest('#gestionDeVentasModulo')) {
            hideShowElementHidden('gestionDeVentasSubmodulos')
        }

        if (e.target.closest('#comprasModulo')) {
            hideShowElementHidden('comprasSubmodulos')
        }

        if (e.target.closest('#creditoYCobranzaModulo')) {
            hideShowElementHidden('creditoYCobranzaSubmodulos')
        }

        if (e.target.closest('#bancosModulo')) {
            hideShowElementHidden('bancosSubmodulos')
        }

        if (e.target.closest('#almacenesModulo')) {
            hideShowElementHidden('almacenesSubmodulos')
        }

        if (e.target.closest('#gestionDeVentasInstitucionalesModulo')) {
            hideShowElementHidden('gestionDeVentasInstitucionalesSubmodulos')
        }

        if (e.target.closest('#almacenesInstitucionalModulo')) {
            hideShowElementHidden('almacenesInstitucionalSubmodulos')
        }

        if (e.target.closest('#pagosModulo')) {
            hideShowElementHidden('pagosSubmodulos')
        }

        if (e.target.closest('#serviciosModulo')) {
            hideShowElementHidden('serviciosSubmodulos')
        }

        if (e.target.closest('#contabilidadModulo')) {
            hideShowElementHidden('contabilidadSubmodulos')
        }

        if (e.target.closest('#fiscalMexicoModulo')) {
            hideShowElementHidden('fiscalMexicoSubmodulos')
        }

        if (e.target.closest('#nominaModulo')) {
            hideShowElementHidden('nominaSubmodulos')
        }

        if (e.target.closest('#gestionDeVentasAutomaticasModulo')) {
            hideShowElementHidden('gestionDeVentasAutomaticasSubmodulos')
        }

        if (e.target.closest('#comprasProfesionalModulo')) {
            hideShowElementHidden('comprasProfesionalSubmodulos')
        }

        if (e.target.closest('#blindajeYPrevencionFiscalModulo')) {
            hideShowElementHidden('blindajeYPrevencionFiscalSubmodulos')
        }

        if (e.target.closest('#recursosHumanosModulo')) {
            hideShowElementHidden('recursosHumanosSubmodulos')
        }

        if (e.target.closest('#logisticaModulo')) {
            hideShowElementHidden('logisticaSubmodulos')
        }

        if (e.target.closest('#activosFijosModulo')) {
            hideShowElementHidden('activosFijosSubmodulos')
        }

        if (e.target.closest('#proyectosModulo')) {
            hideShowElementHidden('proyectosSubmodulos')
        }

        if (e.target.closest('#actividadesModulo')) {
            hideShowElementHidden('actividadesSubmodulos')
        }

        if (e.target.closest('#evidenciasModulo')) {
            hideShowElementHidden('evidenciasSubmodulos')
        }

        if (e.target.closest('#mantenimientoModulo')) {
            hideShowElementHidden('mantenimientoSubmodulos')
        }

        if (e.target.closest('#manufacturaModulo')) {
            hideShowElementHidden('manufacturaSubmodulos')
        }

        if (e.target.closest('#modulosYServiciosEspecializadosModulo')) {
            hideShowElementHidden('modulosYServiciosEspecializadosSubmodulos')
        }

        if (e.target.closest('#modulosPadre')) {
            hideShowElementHidden('modulosHijos')
        }

        if (e.target.closest('#preciosPadre')) {
            hideShowElementHidden('preciosHijos')
        }

        if (e.target.closest('#soportePadre')) {
            hideShowElementHidden('soporteHijos')
        }

        if (e.target.closest('#otrosPadre')) {
            hideShowElementHidden('otrosHijos')
        }

        if (e.target.closest('#razonSocialPadre')) {
            hideShowElementHidden('razonSocialHijos')
        }

        if (e.target.closest('#capacitacionesPadre')) {
            hideShowElementHidden('capacitacionesHijos')
        }

        // Botones de cotizar

        // if (e.target.closest("#btnContratarStarter")) {
        //     buyPackage("Starter");
        // }

        if (e.target.closest('#btnContratarGrow')) {
            buyPackage('grow')
        }

        if (e.target.closest('#btnContratarInstitutional')) {
            buyPackage('institutional')
        }

        if (e.target.closest('#btnContratarManufacturing')) {
            buyPackage('manufacturing')
        }

        if (e.target.closest('#btnContratarEnterprise')) {
            buyPackage('enterprise')
        }

        // if (e.target.closest("#btnCotizarInternationalEnterprise")) {
        //     buyPackage("InternationalEnterprise");
        // }

        // ------ Logica de inputs ------

        if (e.target.matches('#decrementUsuarios')) {
            const inputUsuarios = document.getElementById('inputUsuarios')
            handleDecrementClick(inputUsuarios, 1)
            updatePrices(erpPrices)
            checkLimits(erpPrices)
        }

        if (e.target.matches('#incrementUsuarios')) {
            const inputUsuarios = document.getElementById('inputUsuarios')
            handleIncrementClick(inputUsuarios, 10000)
            updatePrices(erpPrices)
            checkLimits(erpPrices)
        }

        if (e.target.matches('#decrementEmpleados')) {
            const inputEmpleados = document.getElementById('inputEmpleados')
            handleDecrementClick(inputEmpleados, 1)
            checkLimits(erpPrices)
            updatePrices(erpPrices)
        }

        if (e.target.matches('#incrementEmpleados')) {
            const inputEmpleados = document.getElementById('inputEmpleados')
            handleIncrementClick(inputEmpleados, 10000)
            checkLimits(erpPrices)
            updatePrices(erpPrices)
        }

        if (e.target.matches('#decrementTimbres')) {
            const inputTimbres = document.getElementById('inputTimbres')
            handleDecrementClick(inputTimbres, 1)
            checkLimits(erpPrices)
            updatePrices(erpPrices)
        }

        if (e.target.matches('#incrementTimbres')) {
            const inputTimbres = document.getElementById('inputTimbres')
            handleIncrementClick(inputTimbres, 10000)
            checkLimits(erpPrices)
            updatePrices(erpPrices)
        }

        if (e.target.matches('#decrementSucursales')) {
            const inputSucursales = document.getElementById('inputSucursales')
            handleDecrementClick(inputSucursales, 1)
            checkLimits(erpPrices)
            updatePrices(erpPrices)
        }

        if (e.target.matches('#incrementSucursales')) {
            const inputSucursales = document.getElementById('inputSucursales')
            handleIncrementClick(inputSucursales, 10000)
            checkLimits(erpPrices)
            updatePrices(erpPrices)
        }

        // ------ Pagos ------
        if (e.target.matches('#inputPagoInstalacion')) {
            updateSwitchInput('inputPagoInstalacion')
            updatePrices(erpPrices)
        }

        if (e.target.matches('#inputPagoRenta')) {
            updateSwitchInput('inputPagoRenta')
            updatePrices(erpPrices)
        }

        if (e.target.closest('#filterBar')) {
            hideShowElement('hiddenFilter')
            hideShowElement('btnCerrarFiltros')
            hideShowElement('btnAbrirFiltros')
            hideShowElement('btnFilterTitle', 'text-gray-900', 'text-blue-500')
        }

        if (e.target.matches('#monedaUSD')) {
            saveAndUpdateLocalStorage('moneda', 'usd')
            reloadLastCurrencyValue()
            updatePrices(erpPrices)
        }

        if (e.target.matches('#monedaMXN')) {
            saveAndUpdateLocalStorage('moneda', 'mxn')
            reloadLastCurrencyValue()
            updatePrices(erpPrices)
        }

        if (e.target.closest('#btnFAQ0')) {
            hideShowElement('spanId0', 'text-gray-900', 'text-blue-500')
            hideShowElement('btnFAQ0', 'text-gray-900', 'text-blue-500')
            hideShowElement('svgFaqCerrar0')
            hideShowElement('svgFaqAbrir0')
            hideShowElement('faq-0')
        }

        if (e.target.closest('#btnFAQ1')) {
            hideShowElement('spanId1', 'text-gray-900', 'text-blue-500')
            hideShowElement('btnFAQ1', 'text-gray-900', 'text-blue-500')
            hideShowElement('svgFaqCerrar1')
            hideShowElement('svgFaqAbrir1')
            hideShowElement('faq-1')
        }

        if (e.target.closest('#btnFAQ2')) {
            hideShowElement('spanId2', 'text-gray-900', 'text-blue-500')
            hideShowElement('btnFAQ2', 'text-gray-900', 'text-blue-500')
            hideShowElement('svgFaqCerrar2')
            hideShowElement('svgFaqAbrir2')
            hideShowElement('faq-2')
        }

        if (e.target.closest('#btnFAQ3')) {
            hideShowElement('spanId3', 'text-gray-900', 'text-blue-500')
            hideShowElement('btnFAQ3', 'text-gray-900', 'text-blue-500')
            hideShowElement('svgFaqCerrar3')
            hideShowElement('svgFaqAbrir3')
            hideShowElement('faq-3')
        }

        if (e.target.closest('#btnFAQ4')) {
            hideShowElement('spanId4', 'text-gray-900', 'text-blue-500')
            hideShowElement('btnFAQ4', 'text-gray-900', 'text-blue-500')
            hideShowElement('svgFaqCerrar4')
            hideShowElement('svgFaqAbrir4')
            hideShowElement('faq-4')
        }

        if (e.target.closest('#btnFAQ5')) {
            hideShowElement('spanId5', 'text-gray-900', 'text-blue-500')
            hideShowElement('btnFAQ5', 'text-gray-900', 'text-blue-500')
            hideShowElement('svgFaqCerrar5')
            hideShowElement('svgFaqAbrir5')
            hideShowElement('faq-5')
        }

        if (e.target.closest('#btnFAQ6')) {
            hideShowElement('spanId6', 'text-gray-900', 'text-blue-500')
            hideShowElement('btnFAQ6', 'text-gray-900', 'text-blue-500')
            hideShowElement('svgFaqCerrar6')
            hideShowElement('svgFaqAbrir6')
            hideShowElement('faq-6')
        }

        if (e.target.closest('#btnFAQ7')) {
            hideShowElement('spanId7', 'text-gray-900', 'text-blue-500')
            hideShowElement('btnFAQ7', 'text-gray-900', 'text-blue-500')
            hideShowElement('svgFaqCerrar7')
            hideShowElement('svgFaqAbrir7')
            hideShowElement('faq-7')
        }

        if (e.target.closest('#btnFAQ8')) {
            hideShowElement('spanId8', 'text-gray-900', 'text-blue-500')
            hideShowElement('btnFAQ8', 'text-gray-900', 'text-blue-500')
            hideShowElement('svgFaqCerrar8')
            hideShowElement('svgFaqAbrir8')
            hideShowElement('faq-8')
        }

        if (e.target.closest('#btnFAQ9')) {
            hideShowElement('spanId9', 'text-gray-900', 'text-blue-500')
            hideShowElement('btnFAQ9', 'text-gray-900', 'text-blue-500')
            hideShowElement('svgFaqCerrar9')
            hideShowElement('svgFaqAbrir9')
            hideShowElement('faq-9')
        }

        if (e.target.closest('#btnFAQ10')) {
            hideShowElement('spanId10', 'text-gray-900', 'text-blue-500')
            hideShowElement('btnFAQ10', 'text-gray-900', 'text-blue-500')
            hideShowElement('svgFaqCerrar10')
            hideShowElement('svgFaqAbrir10')
            hideShowElement('faq-10')
        }

        if (e.target.closest('#btnFAQ11')) {
            hideShowElement('spanId11', 'text-gray-900', 'text-blue-500')
            hideShowElement('btnFAQ11', 'text-gray-900', 'text-blue-500')
            hideShowElement('svgFaqCerrar11')
            hideShowElement('svgFaqAbrir11')
            hideShowElement('faq-11')
        }

        if (e.target.closest('#btnFAQ12')) {
            hideShowElement('spanId12', 'text-gray-900', 'text-blue-500')
            hideShowElement('btnFAQ12', 'text-gray-900', 'text-blue-500')
            hideShowElement('svgFaqCerrar12')
            hideShowElement('svgFaqAbrir12')
            hideShowElement('faq-12')
        }

        // ------ Botones de contratar ------

        // if (e.target.closest("#btnCotizarStarter")) {
        //     quotePackage("Starter");
        // }

        if (e.target.closest('#btnCotizarGrow')) {
            quotePackage('grow')
        }

        if (e.target.closest('#btnCotizarInstitutional')) {
            quotePackage('institutional')
        }

        if (e.target.closest('#btnCotizarManufacturing')) {
            quotePackage('manufacturing')
        }

        if (e.target.closest('#btnCotizarEnterprise')) {
            quotePackage('enterprise')
        }

        // if (e.target.closest("#btnCotizarInternationalEnterprise")) {
        //     quotePackage("InternationalEnterprise");
        // }
    })

    reloadLastLocalStorageValuesInInputs(inputs)
    reloadLastLocalStorageValuesInSwitchInputs(inputsSwitches)
    reloadLastCurrencyValue()
    updatePrices(erpPrices)
    checkLimits(erpPrices)

    /** ----------------------------------- FINAL ----------------------------------- */
}

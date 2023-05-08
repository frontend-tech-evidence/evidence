/**
 * @author Raul Galindo
 * @description Responsabilidad: Juntar archivos en un solo lugar
 */

import { PrintPaquete } from './core/commands/PrintPaquete'

const printPaquete = new PrintPaquete()
printPaquete.printAll('Implementacion', '10')

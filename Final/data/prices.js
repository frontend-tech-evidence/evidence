/**
 * @author Raul Galindo
 * @description Archivo con las cantidades e información de cada paquete del ERP.
 * Los nombres de las categorías deben de estar en camel case e iguales a sus values en el HTML.
 */

export const erpPrices = {
  categories: {
    servicios: {
      // starter: {
      //   costoBaseRenovandoAnual: 23988,
      //   costoBase: 1999,
      //   usuariosGratis: 1,
      //   precioPorUsuario: 499,
      //   timbres: {
      //     timbresIncluidos: 100,
      //     costoTimbreExtra: 0.87,
      //   },
      //   minUsuarios: 1,
      //   maxUsuarios: 4,
      //   maxSucursales: 1,
      //   maxEmpleados: 10,
      //   costoRazonSocialAdicional: 2990,
      //   costosExtra: {
      //     costoActivacion: 2999,
      //     costoCapacitacion: 4990,
      //     costoMigracion: 4990,
      //     cantUsuariosIncluidosCapacitacion: 2,
      //     costoUsuarioAdicionalCapacitacion: 499,
      //   },
      // soporte: {
      // atencion: "Lunes a Viernes de 09:00 AM a 01:00 PM",
      //     upTime: "98.97%",
      //     tiempoPromedioDeRespuesta: "Menos de 24 horas **"
      // },
      // capacitacion: {
      //     usuariosIncluidos: 2,
      //     horasIncluidas: 6,
      //     horasDisponiblesSemana: 2,
      //     horaVirtualAdicional: "$499",
      //     precioPorCapacitacionUsuariosExtras: "N/A",
      //     diasDeProfesionalesEnfocados: 6
      // },
      // otros: {
      //     numeroAsesoriasEspecialistas: 1,
      //     almacenamientoAdicional: "0,500 USD por GB al mes sobre 10 GB máximo 100 GB",
      //     horasDeDesarrolloIncluidas: "No incluido",
      //     upgrateVersion: "N/A",
      // },
      // razonSocial: {
      //     precioPorRazon: "Paquetes de 1000",
      //     precioUsuarioAdicional: "N/A",
      // }
      // },
      grow: {
        costoBaseRenovandoAnual: 35880,
        costoBase: 2990,
        usuariosGratis: 1,
        precioPorUsuario: 499,
        timbres: {
          timbresIncluidos: 150,
          costoTimbreExtra: 0.87,
        },
        minUsuarios: 1,
        maxUsuarios: 14,
        maxSucursales: 2,
        maxEmpleados: 29,
        costoRazonSocialAdicional: 2990,
        costosExtra: {
          costoActivacion: 9800,
          costoCapacitacion: 9800,
          costoMigracion: 9800,
          cantUsuariosIncluidosCapacitacion: 10,
          costoUsuarioAdicionalCapacitacion: 948,
        },
        soporte: {
          atencion: 'Lunes a Viernes de 09:00 AM a 01:00 PM',
          upTime: '99.00%',
          tiempoPromedioDeRespuesta: 'Menos de 24 horas',
        },
        capacitacion: {
          usuariosIncluidos: 3,
          horasIncluidas: 10,
          horasDisponiblesSemana: 3,
          horaVirtualAdicional: '$948',
          precioPorCapacitacionUsuariosExtras: 'N/A',
          diasDeProfesionalesEnfocados:
            '25 días de incorporación con un entrenador especializado',
        },
        otros: {
          numeroAsesoriasEspecialistas: 2,
          almacenamientoAdicional:
            '0,500 USD por GB al mes sobre 20 GB máximo 100 GB',
          horasDeDesarrolloIncluidas: 'No incluido',
          upgrateVersion: '$16,421',
        },
        razonSocial: {
          precioPorRazon: 'Paquetes de 1000',
          precioUsuarioAdicional: '$199',
        },
      },
      institutional: {
        costoBaseRenovandoAnual: 107880,
        costoBase: 8990,
        usuariosGratis: 1,
        precioPorUsuario: 716,
        timbres: {
          timbresIncluidos: 200,
          costoTimbreExtra: 0.87,
        },
        minUsuarios: 1,
        maxUsuarios: 29,
        maxSucursales: 10,
        maxEmpleados: 99,
        costoRazonSocialAdicional: 2990,
        costosExtra: {
          costoActivacion: 19000,
          costoCapacitacion: 19000,
          costoMigracion: 19000,
          cantUsuariosIncluidosCapacitacion: 30,
          costoUsuarioAdicionalCapacitacion: 948,
        },
        soporte: {
          atencion: 'Lunes a Viernes de 09:00 AM a 07:00 PM',
          upTime: '99.49%',
          tiempoPromedioDeRespuesta: '1 a 16 horas',
        },
        capacitacion: {
          usuariosIncluidos: 10,
          horasIncluidas: 25,
          horasDisponiblesSemana: 5,
          horaVirtualAdicional: '$948',
          precioPorCapacitacionUsuariosExtras: '$499',
          diasDeProfesionalesEnfocados: 90,
        },
        otros: {
          numeroAsesoriasEspecialistas: 3,
          almacenamientoAdicional:
            '0,500 USD por GB al mes sobre 20 GB máximo 2.5 Terabytes',
          horasDeDesarrolloIncluidas: 'Opcional',
          upgrateVersion: '$27,600',
        },
        razonSocial: {
          precioPorRazon: 'Paquetes de 1000',
          precioUsuarioAdicional: '$199',
        },
      },
      manufacturing: {
        costoBaseRenovandoAnual: 179880,
        costoBase: 14990,
        usuariosGratis: 1,
        precioPorUsuario: 829,
        precioPorUsuarioDespuesDeLimite: 499,
        timbres: {
          timbresIncluidos: 500,
          costoTimbreExtra: 0.87,
        },
        minUsuarios: 1,
        maxUsuarios: 99,
        maxSucursales: 15,
        maxEmpleados: 299,
        costoRazonSocialAdicional: 2990,
        costosExtra: {
          costoActivacion: 19000,
          costoCapacitacion: 49000,
          costoMigracion: 29000,
          cantUsuariosIncluidosCapacitacion: 40,
          costoUsuarioAdicionalCapacitacion: 948,
        },
        soporte: {
          atencion: 'Lunes a Viernes de 09:00 AM a 07:00 PM',
          upTime: '99.49%',
          tiempoPromedioDeRespuesta: '30 minutos a 14 horas',
        },
        capacitacion: {
          usuariosIncluidos: 20,
          horasIncluidas: 100,
          horasDisponiblesSemana: 5,
          horaVirtualAdicional: '$948',
          precioPorCapacitacionUsuariosExtras: '$924',
          diasDeProfesionalesEnfocados: 90,
        },
        otros: {
          numeroAsesoriasEspecialistas: 4,
          almacenamientoAdicional:
            '0,500 USD por GB al mes sobre 100 MB sin límites',
          horasDeDesarrolloIncluidas: 'Opcional',
          upgrateVersion: '$40,000',
        },
        razonSocial: {
          precioPorRazon: 'Paquetes de 1000',
          precioUsuarioAdicional: '$299',
        },
      },
      // enterprise: {
      //     costoBaseRenovandoAnual: 599880,
      //     costoBase: 49990,
      //     usuariosGratis: 1,
      //     precioPorUsuario: 998,
      //     precioPorUsuarioDespuesDeLimite: 499,
      //     timbres: {
      //         timbresIncluidos: 1000,
      //         costoTimbreExtra: 0.87,
      //     },
      //     minUsuarios: 50,
      //     maxUsuarios: 499,
      //     maxSucursales: 100,
      //     maxEmpleados: 999,
      //     costoRazonSocialAdicional: 12000,
      //     costosExtra: {
      //         costoActivacion: 449980,
      //         costoCapacitacion: 449980,
      //         costoMigracion: 295541,
      //         cantUsuariosIncluidosCapacitacion: 50,
      //         costoUsuarioAdicionalCapacitacion: 948,
      //     },
      //     soporte: {
      //    atencion: "Lunes a Sabado 24/7 **",
      //         upTime: "99.49%",
      //         tiempoPromedioDeRespuesta: "15 minutos a 12 horas"
      //     },
      //     capacitacion: {
      //         usuariosIncluidos: 20,
      //         horasIncluidas: 120,
      //         horasDisponiblesSemana: 10,
      //         horaVirtualAdicional: "$948",
      //         precioPorCapacitacionUsuariosExtras: "$924",
      //         diasDeProfesionalesEnfocados: "Arquitectro de extio asignado para garantizar la transformacion"
      //     },
      //     otros: {
      //         numeroAsesoriasEspecialistas: 6,
      //         almacenamientoAdicional: "0,500 USD por GB al mes sobre 1 TB sin límites",
      //         horasDeDesarrolloIncluidas: "Incluido",
      //         upgrateVersion: "$1,098,501",
      //     },
      //     razonSocial: {
      //         precioPorRazon: "Paquetes de 1000",
      //         precioUsuarioAdicional: "$399",
      //     }
      // },
    },
  },
  precioDolar: 16,
  versiones: 1,
}

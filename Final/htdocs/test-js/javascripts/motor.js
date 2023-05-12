// https://www.w3schools.com/html/html_form_input_types.asp
//Esta funcion tiene que retornar un  montoMinimo, montoMáximo y recomendacionLinea
//Pedir monto minimo y maximo, genero, y fecha del primer empleo,

function p1(montoMinimo, montoMaximo) {
  const p1 = montoMinimo + Math.sqrt(montoMaximo - montoMinimo);
  return p1;
}

function p2(montoMinimo, montoMaximo) {
  const p2 = montoMinimo + 0.0175 * (montoMaximo - montoMinimo);
  return p2;
}

function lineaCreditoOptima(p1, p2) {
  return Math.max(p1, p2);
}

let montoMinimo = "";
let montoMax = "";
let lineaOptima = "";

function calculoMotor(tipoNom, meses, genero) {
  // Debe de retornar montoMinimo, montoMaximo y recomendaciones
  const montoMinx = "montoMin";
  const montoMaxx = "montoMax";

  const montos = {
    masculino: {
      montoMin: {
        0: {
          a: 100,
          b: 1000,
          c: 400,
          d: 400,
        },
        27: {
          a: 400,
          b: 600,
          c: 200,
          d: 300,
        },
        28: {
          a: 900,
          b: 1000,
          c: 200,
          d: 500,
        },
        29: {
          a: 100,
          b: 1000,
          c: 1000,
          d: 900,
        },
        30: {
          a: 600,
          b: 1000,
          c: 600,
          d: 1000,
        },
      },
      montoMax: {
        masculino: {
          0: {
            a: 4900,
            b: 4700,
            c: 5000,
            d: 4400,
          },
          27: {
            a: 4700,
            b: 4400,
            c: 4700,
            d: 4700,
          },
          28: {
            a: 4600,
            b: 5000,
            c: 5000,
            d: 4300,
          },
          29: {
            a: 4600,
            b: 4400,
            c: 4200,
            d: 4900,
          },
          30: {
            a: 4500,
            b: 4900,
            c: 4600,
            d: 4300,
          },
        },
      },
    },
    femenino: {
      montoMin: {
        0: {
          a: 800,
          b: 800,
          c: 200,
          d: 500,
        },
        25: {
          a: 800,
          b: 700,
          c: 900,
          d: 1000,
        },
        26: {
          a: 800,
          b: 100,
          c: 700,
          d: 600,
        },
        27: {
          a: 600,
          b: 600,
          c: 800,
          d: 400,
        },
        28: {
          a: 200,
          b: 700,
          c: 100,
          d: 700,
        },
      },
      montoMax: {
        0: {
          a: 4000,
          b: 4700,
          c: 4600,
          d: 5000,
        },
        25: {
          a: 4200,
          b: 4200,
          c: 4900,
          d: 4900,
        },
        26: {
          a: 4100,
          b: 4500,
          c: 4600,
          d: 4700,
        },
        27: {
          a: 4200,
          b: 4300,
          c: 4700,
          d: 5000,
        },
        28: {
          a: 4500,
          b: 4400,
          c: 4000,
          d: 4300,
        },
      },
    },
  };

  montoMinimo = montos[genero][montoMinx][meses][tipoNom];
  montoMax = montos[genero][montoMaxx][meses][tipoNom];

  let p1x = p1(montoMinimo, montoMax);
  let p2x = p2(montoMinimo, montoMax);

  lineaOptima = lineaCreditoOptima(p1x, p2x);
}

const div = document.getElementById("busqueda");
const inputs = document.getElementById("inputs");
const button = document.getElementById("button");

//Inputs
const tipoNomina = document.getElementById("nomina");
const meses = document.getElementById("meses");
let genero = "";

radioButtons.addEventListener("click", function () {
  document.querySelectorAll(`input[name="genero"]`).forEach((element) => {
    if (element.checked) {
      genero = element.value;
    }
  });
});

//Al hacer click se cargan los datos calculados.
button.addEventListener("click", function () {
  div.removeChild(inputs);
  calculoMotor(tipoNomina.value, meses.value, genero);

  const table = document.getElementById("busqueda");
  const elementNode = document.createElement("div");

  elementNode.innerHTML = `  
 <div class="flex flex-col gap-y-2 mb-4">
        <table id="table">
          <tr class="border border-kosmos_800">
            <td class="p-1 text-center">Tipo de Nómina</td>
            <td class="p-1 text-center">Fecha Desde el Primer Empleo</td>
            <td class="p-1 text-center">Género</td>
            <td class="p-1 text-center">Monto Mínimo de Crédito</td>
            <td class="p-1 text-center">Monto Máximo de Crédito</td>
            <td class="p-1 text-center">Línea Óptima de Crédito</td>
          </tr>
             
            <tr class="border border-kosmos_800">
                <td class="p-1 text-center">${tipoNomina.value}</td>
                <td class="p-1 text-center">${meses.value}</td>
                <td class="p-1 text-center">${genero}</td>
                <td class="p-1 text-center">${montoMinimo}</td>
                <td class="p-1 text-center">${montoMax}</td>
                <td class="p-1 text-center">${lineaOptima}</td>
            </tr>  
      </table>
</div>   
    `;
  table.appendChild(elementNode);
});

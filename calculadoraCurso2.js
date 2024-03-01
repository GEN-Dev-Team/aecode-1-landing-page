// URL del documento de Google Sheets
let url =
  "https://docs.google.com/spreadsheets/d/1bu8nhjEb_D4-d3YFJUf9AzWO0puNPLA-E2KabyhIC00/gviz/tq?sheet=PRECIOS DISEÑO PARAM.";
let url1 =
  "https://docs.google.com/spreadsheets/d/1I7RkvgnhIlkFTEMM0pWGjOgZqrYlZUv91a0KnZvXOP0/gviz/tq?sheet=CUPONESWEB";
// Realizar la solicitud fetch
fetch(url)
  .then((res) => res.text())
  .then((rep) => {
    // Analizar la respuesta JSON
    const data = JSON.parse(rep.substr(47).slice(0, -2));
    // Recorrer las filas de datos
    data.table.rows.forEach((main, rowIndex) => {
      const row = document.createElement("tr");

      // Recorrer las celdas de la fila actual
      main.c.forEach((ele, colIndex) => {
        const cell = document.createElement("td");

        row.append(cell);

        // Verificar si estamos en la columna y fila que queremos
        if (colIndex === 1 && rowIndex === 0) {
          document.getElementById("precio1").textContent = ele.v.toFixed(2);
        }
        if (colIndex === 1 && rowIndex === 1) {
          document.getElementById("precio2").textContent = ele.v.toFixed(2);
        }
        if (colIndex === 1 && rowIndex === 2) {
          document.getElementById("precio3").textContent = ele.v.toFixed(2);
        }
        if (colIndex === 1 && rowIndex === 3) {
          document.getElementById("precio4").textContent = ele.v.toFixed(2);
        }

        if (colIndex === 1 && rowIndex === 0) {
          document.getElementById("precio11").textContent = ele.v.toFixed(2);
        }
        if (colIndex === 1 && rowIndex === 1) {
          document.getElementById("precio21").textContent = ele.v.toFixed(2);
        }
        if (colIndex === 1 && rowIndex === 2) {
          document.getElementById("precio31").textContent = ele.v.toFixed(2);
        }
        if (colIndex === 1 && rowIndex === 3) {
          document.getElementById("precio41").textContent = ele.v.toFixed(2);
        }
      });
      calcularPrecioFinal1();
    });
  });

function calcularSubtotal1(productoId, precioId) {
  // URL del documento de Google Sheets
  let url =
    "https://docs.google.com/spreadsheets/d/1bu8nhjEb_D4-d3YFJUf9AzWO0puNPLA-E2KabyhIC00/gviz/tq?sheet=PRECIOS DISEÑO PARAM.";

  var checkbox = document.getElementById(productoId);
  var precio = parseFloat(document.getElementById(precioId).innerText);
  var precioBase = parseFloat(document.getElementById("subtotalId1").innerText);
  var checkbox1 = document.getElementById("producto11");
  var checkbox2 = document.getElementById("producto21");
  var checkbox3 = document.getElementById("producto31");
  var checkbox4 = document.getElementById("producto41");

  var subtotal = 0;

  if (checkbox.checked) {
    subtotal = precioBase + precio;
    document.getElementById("dsctModulosId1").innerText = subtotal.toFixed(2);
    document.getElementById("subtotalId1").style.textDecoration = "none";
    document.getElementById("precioFinalId1").innerText = subtotal.toFixed(2);
  } else {
    subtotal = precioBase - precio;
    document.getElementById("dsctModulosId1").innerText = subtotal.toFixed(2);
    document.getElementById("subtotalId1").style.textDecoration = "none";
    document.getElementById("precioFinalId1").innerText = (0).toFixed(2);
  }

  // Realizar la solicitud fetch
  fetch(url)
    .then((res) => res.text())
    .then((rep) => {
      // Analizar la respuesta JSON
      const data = JSON.parse(rep.substr(47).slice(0, -2));
      // Recorrer las filas de datos
      data.table.rows.forEach((main, rowIndex) => {
        const row = document.createElement("tr");

        // Recorrer las celdas de la fila actual
        main.c.forEach((ele, colIndex) => {
          const cell = document.createElement("td");
          cell.textContent = ele.v;
          row.append(cell);

          if (colIndex == 1) {
            if (checkbox1.checked && checkbox2.checked && rowIndex === 4) {
              document.getElementById("dsctModulosId1").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId1").style.textDecoration =
                "line-through";
              calcularDescuento11("descuento1Id1");
              calcularDescuento21("descuento2Id1");
              calcularPrecioFinal1();
            }

            if (checkbox1.checked && checkbox3.checked && rowIndex === 5) {
              document.getElementById("dsctModulosId1").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId1").style.textDecoration =
                "line-through";
              calcularDescuento11("descuento1Id1");
              calcularDescuento21("descuento2Id1");
              calcularPrecioFinal1();
            }

            if (checkbox1.checked && checkbox4.checked && rowIndex === 6) {
              document.getElementById("dsctModulosId1").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId1").style.textDecoration =
                "line-through";
              calcularDescuento11("descuento1Id1");
              calcularDescuento21("descuento2Id1");
              calcularPrecioFinal1();
            }
            if (checkbox2.checked && checkbox3.checked && rowIndex === 7) {
              document.getElementById("dsctModulosId1").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId1").style.textDecoration =
                "line-through";
              calcularDescuento11("descuento1Id1");
              calcularDescuento21("descuento2Id1");
              calcularPrecioFinal1();
            }
            if (checkbox2.checked && checkbox4.checked && rowIndex === 8) {
              document.getElementById("dsctModulosId1").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId1").style.textDecoration =
                "line-through";
              calcularDescuento11("descuento1Id1");
              calcularDescuento21("descuento2Id1");
              calcularPrecioFinal1();
            }
            if (checkbox3.checked && checkbox4.checked && rowIndex === 9) {
              document.getElementById("dsctModulosId1").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId1").style.textDecoration =
                "line-through";
              calcularDescuento11("descuento1Id1");
              calcularDescuento21("descuento2Id1");
              calcularPrecioFinal1();
            }
            if (
              checkbox1.checked &&
              checkbox2.checked &&
              checkbox3.checked &&
              rowIndex === 10
            ) {
              document.getElementById("dsctModulosId1").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId1").style.textDecoration =
                "line-through";
              calcularDescuento11("descuento1Id1");
              calcularDescuento21("descuento2Id1");
              calcularPrecioFinal1();
            }
            if (
              checkbox1.checked &&
              checkbox2.checked &&
              checkbox4.checked &&
              rowIndex === 11
            ) {
              document.getElementById("dsctModulosId1").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId1").style.textDecoration =
                "line-through";
              calcularDescuento11("descuento1Id1");
              calcularDescuento21("descuento2Id1");
              calcularPrecioFinal1();
            }
            if (
              checkbox1.checked &&
              checkbox3.checked &&
              checkbox4.checked &&
              rowIndex === 12
            ) {
              document.getElementById("dsctModulosId1").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId1").style.textDecoration =
                "line-through";
              calcularDescuento11("descuento1Id1");
              calcularDescuento21("descuento2Id1");
              calcularPrecioFinal1();
            }
            if (
              checkbox2.checked &&
              checkbox3.checked &&
              checkbox4.checked &&
              rowIndex === 13
            ) {
              document.getElementById("dsctModulosId1").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId1").style.textDecoration =
                "line-through";
              calcularDescuento11("descuento1Id1");
              calcularDescuento21("descuento2Id1");
              calcularPrecioFinal1();
            }
            if (
              checkbox1.checked &&
              checkbox2.checked &&
              checkbox3.checked &&
              checkbox4.checked &&
              rowIndex === 14
            ) {
              document.getElementById("dsctModulosId1").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId1").style.textDecoration =
                "line-through";
              calcularDescuento11("descuento1Id1");
              calcularDescuento21("descuento2Id1");
              calcularPrecioFinal1();
            }
          }
        });
        calcularDescuento11("descuento1Id1");
        calcularDescuento21("descuento2Id1");
        calcularPrecioFinal1();
      });
    });

  document.getElementById("subtotalId1").innerText = subtotal.toFixed(2);
}

function calcularDescuento11(descuentoId) {
  var checkbox = document.getElementById(descuentoId);
  var subtotal = parseFloat(
    document.getElementById("dsctModulosId1").innerText
  );
  var descuento = 0;

  if (checkbox.checked) {
    descuento = subtotal * 0.2;
  } else {
    descuento = 0;
  }
  document.getElementById("dsct1Id1").innerText = descuento.toFixed(2);
  calcularPrecioFinal1();
}

function calcularDescuento21(descuentoId) {
  var checkbox = document.getElementById(descuentoId);
  var subtotal = parseFloat(
    document.getElementById("dsctModulosId1").innerText
  );
  var descuento = 0;
  if (checkbox.checked) {
    descuento = subtotal * 0.1;
  } else {
    descuento = 0;
  }
  document.getElementById("dsct2Id1").innerText = descuento.toFixed(2);
  calcularPrecioFinal1();
}

function calcularDescuento3(descuentoId) {
  var checkbox = document.getElementById(descuentoId);

  fetch(url1)
    .then((res) => res.text())
    .then((rep) => {
      // Analizar la respuesta JSON
      const data = JSON.parse(rep.substr(47).slice(0, -2));
      console.log(data);
      // Recorrer las filas de datos
      data.table.rows.forEach((main, rowIndex) => {
        const row = document.createElement("tr");

        // Recorrer las celdas de la fila actual
        main.c.forEach((ele, colIndex) => {
          const cell = document.createElement("td");
          cell.textContent = ele.v;
          row.append(cell);

          // Verificar si estamos en la columna y fila que queremos
          if (colIndex == 2 && checkbox.checked) {
            if (document.getElementById("cuponId1").value == ele.v) {
              // Obtener el valor de la celda en la fila 0, columna 3
              const nuevoValor = data.table.rows[rowIndex].c[3].v;
              document.getElementById("dsct3Id1").textContent =
                nuevoValor.toFixed(2);
            }
            calcularPrecioFinal1();
          }
        });
      });
    });

  if (!checkbox.checked) {
    document.getElementById("dsct3Id1").textContent = (0).toFixed(2);
    calcularPrecioFinal1();
  }
}

function calcularPrecioFinal1() {
  var precioReducido = parseFloat(
    document.getElementById("dsctModulosId1").innerText
  );
  var dsct1 = parseFloat(document.getElementById("dsct1Id1").innerText);
  var dsct2 = parseFloat(document.getElementById("dsct2Id1").innerText);
  var dsct3 = parseFloat(document.getElementById("dsct3Id1").innerText);
  var precioFinal = 0;
  precioFinal = precioReducido - dsct1 - dsct2 - dsct3;
  document.getElementById("precioFinalId1").innerText = precioFinal.toFixed(2);
}

function calcularSubtotal(productoId, precioId) {
  // URL del documento de Google Sheets
  let url =
    "https://docs.google.com/spreadsheets/d/1bu8nhjEb_D4-d3YFJUf9AzWO0puNPLA-E2KabyhIC00/gviz/tq?sheet=PRECIOS DISEÑO PARAM.";

  var checkbox = document.getElementById(productoId);
  var precio = parseFloat(document.getElementById(precioId).innerText);
  var precioBase = parseFloat(document.getElementById("subtotalId").innerText);
  var checkbox1 = document.getElementById("producto1");
  var checkbox2 = document.getElementById("producto2");
  var checkbox3 = document.getElementById("producto3");
  var checkbox4 = document.getElementById("producto4");

  var subtotal = 0;

  if (checkbox.checked) {
    subtotal = precioBase + precio;
    document.getElementById("dsctModulosId").innerText = subtotal.toFixed(2);
    document.getElementById("subtotalId").style.textDecoration = "none";
    document.getElementById("precioFinalId").innerText = subtotal.toFixed(2);
  } else {
    subtotal = precioBase - precio;
    document.getElementById("dsctModulosId").innerText = subtotal.toFixed(2);
    document.getElementById("subtotalId").style.textDecoration = "none";
    document.getElementById("precioFinalId").innerText = (0).toFixed(2);
  }

  // Realizar la solicitud fetch
  fetch(url)
    .then((res) => res.text())
    .then((rep) => {
      // Analizar la respuesta JSON
      const data = JSON.parse(rep.substr(47).slice(0, -2));
      // Recorrer las filas de datos
      data.table.rows.forEach((main, rowIndex) => {
        const row = document.createElement("tr");

        // Recorrer las celdas de la fila actual
        main.c.forEach((ele, colIndex) => {
          const cell = document.createElement("td");
          cell.textContent = ele.v;
          row.append(cell);

          if (colIndex == 1) {
            if (checkbox1.checked && checkbox2.checked && rowIndex === 4) {
              document.getElementById("dsctModulosId").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId").style.textDecoration =
                "line-through";
              calcularDescuento1("descuento1Id");
              calcularDescuento2("descuento2Id");
              calcularPrecioFinal();
            }

            if (checkbox1.checked && checkbox3.checked && rowIndex === 5) {
              document.getElementById("dsctModulosId").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId").style.textDecoration =
                "line-through";
              calcularDescuento1("descuento1Id");
              calcularDescuento2("descuento2Id");
              calcularPrecioFinal();
            }

            if (checkbox1.checked && checkbox4.checked && rowIndex === 6) {
              document.getElementById("dsctModulosId").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId").style.textDecoration =
                "line-through";
              calcularDescuento1("descuento1Id");
              calcularDescuento2("descuento2Id");
              calcularPrecioFinal();
            }
            if (checkbox2.checked && checkbox3.checked && rowIndex === 7) {
              document.getElementById("dsctModulosId").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId").style.textDecoration =
                "line-through";
              calcularDescuento1("descuento1Id");
              calcularDescuento2("descuento2Id");
              calcularPrecioFinal();
            }
            if (checkbox2.checked && checkbox4.checked && rowIndex === 8) {
              document.getElementById("dsctModulosId").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId").style.textDecoration =
                "line-through";
              calcularDescuento1("descuento1Id");
              calcularDescuento2("descuento2Id");
              calcularPrecioFinal();
            }
            if (checkbox3.checked && checkbox4.checked && rowIndex === 9) {
              document.getElementById("dsctModulosId").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId").style.textDecoration =
                "line-through";
              calcularDescuento1("descuento1Id");
              calcularDescuento2("descuento2Id");
              calcularPrecioFinal();
            }
            if (
              checkbox1.checked &&
              checkbox2.checked &&
              checkbox3.checked &&
              rowIndex === 10
            ) {
              document.getElementById("dsctModulosId").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId").style.textDecoration =
                "line-through";
              calcularDescuento1("descuento1Id");
              calcularDescuento2("descuento2Id");
              calcularPrecioFinal();
            }
            if (
              checkbox1.checked &&
              checkbox2.checked &&
              checkbox4.checked &&
              rowIndex === 11
            ) {
              document.getElementById("dsctModulosId").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId").style.textDecoration =
                "line-through";
              calcularDescuento1("descuento1Id");
              calcularDescuento2("descuento2Id");
              calcularPrecioFinal();
            }
            if (
              checkbox1.checked &&
              checkbox3.checked &&
              checkbox4.checked &&
              rowIndex === 12
            ) {
              document.getElementById("dsctModulosId").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId").style.textDecoration =
                "line-through";
              calcularDescuento1("descuento1Id");
              calcularDescuento2("descuento2Id");
              calcularPrecioFinal();
            }
            if (
              checkbox2.checked &&
              checkbox3.checked &&
              checkbox4.checked &&
              rowIndex === 13
            ) {
              document.getElementById("dsctModulosId").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId").style.textDecoration =
                "line-through";
              calcularDescuento1("descuento1Id");
              calcularDescuento2("descuento2Id");
              calcularPrecioFinal();
            }
            if (
              checkbox1.checked &&
              checkbox2.checked &&
              checkbox3.checked &&
              checkbox4.checked &&
              rowIndex === 14
            ) {
              document.getElementById("dsctModulosId").textContent =
                ele.v.toFixed(2);
              document.getElementById("subtotalId").style.textDecoration =
                "line-through";
              calcularDescuento1("descuento1Id");
              calcularDescuento2("descuento2Id");
              calcularPrecioFinal();
            }
          }
        });
        calcularDescuento1("descuento1Id");
        calcularDescuento2("descuento2Id");
        calcularPrecioFinal();
      });
    });

  document.getElementById("subtotalId").innerText = subtotal.toFixed(2);
}

function calcularDescuento1(descuentoId) {
  var checkbox = document.getElementById(descuentoId);
  var subtotal = parseFloat(document.getElementById("dsctModulosId").innerText);
  var descuento = 0;

  if (checkbox.checked) {
    descuento = subtotal * 0.2;
  } else {
    descuento = 0;
  }
  document.getElementById("dsct1Id").innerText = descuento.toFixed(2);
  calcularPrecioFinal();
}

function calcularDescuento2(descuentoId) {
  var checkbox = document.getElementById(descuentoId);
  var subtotal = parseFloat(document.getElementById("dsctModulosId").innerText);
  var descuento = 0;
  if (checkbox.checked) {
    descuento = subtotal * 0.1;
  } else {
    descuento = 0;
  }
  document.getElementById("dsct2Id").innerText = descuento.toFixed(2);
  calcularPrecioFinal();
}

function calcularPrecioFinal() {
  var precioReducido = parseFloat(
    document.getElementById("dsctModulosId").innerText
  );
  var dsct1 = parseFloat(document.getElementById("dsct1Id").innerText);
  var dsct2 = parseFloat(document.getElementById("dsct2Id").innerText);
  var dsct3 = parseFloat(document.getElementById("dsct3Id").innerText);
  var precioFinal = 0;
  precioFinal = precioReducido - dsct1 - dsct2 - dsct3;
  document.getElementById("precioFinalId").innerText = precioFinal.toFixed(2);
}

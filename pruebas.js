// URL del documento de Google Sheets
let url =
  "https://docs.google.com/spreadsheets/d/1pcQYVzXvtcPinbKbbGcFmgIq40wNRJLuhs6dNaOtmDE/gviz/tq?sheet=CUPONESWEB";
// Realizar la solicitud fetch
fetch(url)
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
        if (rowIndex == 1 && colIndex == 3) {
          document.getElementById("cupon").textContent = ele.v;
        }
      });
    });
  });

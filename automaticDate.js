let urlDate =
  "https://docs.google.com/spreadsheets/d/1rR5ZE4Z6fvS8P9GzEwmb2I9u8Gb9c7VE3QyRW3p4t4Y/gviz/tq?sheet=FechaCursos";

fetch(urlDate)
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

        var rowValue = 0;
        var course = document.body.getAttribute("class");

        if (course == "curso1") rowValue = 0;
        if (course == "curso2") rowValue = 1;
        if (course == "curso3") rowValue = 2;
        if (course == "curso4") rowValue = 3;
        if (course == "curso5") rowValue = 4;

        if (colIndex === 1 && rowIndex === rowValue) {
          const fecha = new Date(ele.f.split("/").reverse().join("-"));
          const today = new Date();

          if (fecha < today) {
            if (document.documentElement.lang == "es") {
              document.getElementById("courseDate").textContent =
                "Curso en progreso";
            } else {
              document.getElementById("courseDate").textContent =
                "Course in progress";
            }
          } else {
            document.getElementById("courseDate").textContent = ele.f;
          }
        }
      });
    });
  });

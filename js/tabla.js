// Tabla con la lista de vehículos
function generaTabla() {
  //Obtener la referencia del elemento body
  var body = document.getElementsByTagName("div")[0];

  //Crear elemento.
  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");

  var listaVehiculos = getListaVehiculos();

  // Crea las celdas
  for (var i = 0; i < 3; i++) {
    //
    var tr = document.createElement("tr");

    for (var j = 0; j < 1; j++) {
      //Crear td
      var td = document.createElement("td");
      var node = document.createTextNode(
        "" + listaVehiculos[i].referencia + " " + listaVehiculos[i].modelo
      );
      td.appendChild(node);
      tr.appendChild(td);
    }

    tblBody.appendChild(tr);
  }

  tabla.appendChild(tblBody);
  body.appendChild(tabla);
}

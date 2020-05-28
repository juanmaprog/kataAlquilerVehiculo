var listaVehiculos = getListaVehiculos();

function getListaVehiculos() {
  //Patrón Singleton.
  if (listaVehiculos != null) {
    return listaVehiculos;
  }

  var lista = [
    {
      referencia: 1,
      modelo: "Seat Ibiza 1.9 TDI 110cv",
      añosExperienciaMinimo: 2,
    },
    {
      referencia: 2,
      modelo: "Volkswagen Golf R32 3.2 250cv",
      añosExperienciaMinimo: 4,
    },
    {
      referencia: 3,
      modelo: "Mercedes-AMG A 45 2.0 turbo 421cv",
      añosExperienciaMinimo: 6,
    },
  ];

  return lista;
}

function añoExpedicionCarnet() {
  return document.getElementById("año-expedicion-carnet").value;
}

function referenciaSolicitada() {
  return document.getElementById("referencia-vehiculo").value;
}

function getVehiculoSolicitado() {
  let result;

  for (let i = 0; i < listaVehiculos.length; i++) {
    if (listaVehiculos[i].referencia == referenciaSolicitada()) {
      result = listaVehiculos[i];
    }
  }

  //TODO: La lista debe de devolver el resultado esperado.tabla

  if (result == null) {
    console.log([]);
    return [];
  }

  return result;
}

function solicitarAlquiler() {
  //Año de expedición del carnet
  let añoCarnet = document.getElementById("año-expedicion-carnet").value;

  //Vehículo solicitado.
  var vehiculo = getVehiculoSolicitado();

  //Validar si la referencia del vehículo solicitado está en la lista de vehículos.
  if (vehiculo.length == 0) {
    setEstadoSolicitud("Introduzca la referencia correcta (del 1 al 3).", 0);
    return;
  }

  //Años de experiencia necesaria para el vehículo solicitado.
  let faltanAños =
    vehiculo.añosExperienciaMinimo - (new Date().getFullYear() - añoCarnet);

  //Se admite o deniega la solicitud y se informa al usuario.
  if (faltanAños <= 0) {
    //Se admite.
    setEstadoSolicitud(
      "Solicitud aprobada. Ha alquilado el " + vehiculo.modelo,
      1
    );
  } else {
    //Se deniega.
    setEstadoSolicitud(
      "Solicitud denegada, le faltan " + faltanAños + " años de experiencia.",
      2
    );
  }
}

function setEstadoSolicitud(texto, aprobada) {
  let resultadoSolicitud = document.getElementById("resultado-solicitud");

  resultadoSolicitud.innerHTML = texto;

  console.log(aprobada);
  if (aprobada == 1) {
    resultadoSolicitud.style.color = "green";
  } else if (aprobada == 2) {
    resultadoSolicitud.style.color = "red";
  } else if (aprobada == 0) {
    resultadoSolicitud.style.color = "red";
  }
}

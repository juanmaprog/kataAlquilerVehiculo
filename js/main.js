//OBJETOS

var vehiculo = {
  referencia: "",
  modelo: "",
  añosExperienciaMinimo: 2, //Años mínimos para todos los vehículos.
};

//CREAR LA COLECCIÓN DE VEHÍCULOS DISPONIBLES
var listaVehiculos = [
  (vehiculo = {
    referencia: 1,
    modelo: "Seat Ibiza 1.9 TDI 110cv",
    añosExperienciaMinimo: 2,
  }),
  (vehiculo = {
    referencia: 2,
    modelo: "Volkswagen Golf R32 3.2 250cv",
    añosExperienciaMinimo: 4,
  }),
  (vehiculo = {
    referencia: 3,
    modelo: "Mercedes-AMG A 45 2.0 turbo 421cv",
    añosExperienciaMinimo: 6,
  }),
];

var referenciaSolicitada = prompt(
  "Indique la referencia del vehículo que desea alquilar."
);

var añoExpdecionCarnet = prompt(
  "Indique el año de expedición del carnet de conducir."
);

console.log("Ha elegido", referenciaSolicitada);
console.log("Año", añoExpdecionCarnet);

var vehiculo = getVehiculoSolicitado();

console.log(vehiculo);

var años = new Date().getFullYear() - añoExpdecionCarnet;
var faltanAños = vehiculo.añosExperienciaMinimo - años;

if (años >= vehiculo.añosExperienciaMinimo) {
  //   console.log("No tiene experiencia para alquilar este vehículo");
  console.log(vehiculo.modelo, " alquilado correctamente.");
} else {
  console.log(
    "No tiene experiencia para alquilar este vehículo.",
    "Te faltan ",
    faltanAños,
    " más de experiencia."
  );
}

function getVehiculoSolicitado() {
  var result;

  for (let index = 0; index < listaVehiculos.length; index++) {
    if (listaVehiculos[index].referencia == referenciaSolicitada) {
      result = listaVehiculos[index];
    }
  }

  return result;
}

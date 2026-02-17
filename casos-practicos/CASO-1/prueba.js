// METODO 1 (MAP)

function longitudCadenasArray(nombres) {
  return nombres.map(function (nombre) {
    return nombre.length;
  });
}

console.log(longitudCadenasArray(["Carlos", "Pedro", "Elisenda"]));

// METODO 2 (FOR CLASICO)

function longitudCadenasArray2(nombres) {
  const longitudes = [];

  for (let i = 0; i < nombres.length; i++) {
    const nombre = nombres[i];

    const longitud = nombre.length;

    longitudes.push(longitud);
  }
  return longitudes;
}

console.log(longitudCadenasArray2(["Carlos", "Pedro", "Elisenda"]));

// METODO 3 (FOR EACH)

function longitudCadenasArray3(nombres) {
  const longitudes = [];

  nombres.forEach(function (nombre) {
    longitudes.push(nombre.length);
  });

  return longitudes;
}

console.log(longitudCadenasArray3(["Carlos", "Pedro", "Elisenda"]));

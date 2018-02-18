/**
 * Suma los valores enteros de un array
 * @param  {Array} array Array de números enteros
 * @returns {Integer} Suma de los valores del array
 * @throws Error cuando un valor del array no es entero
 */
const sumaArray = (arrayDeEnteros) => {
  if (arrayDeEnteros === null) {
    throw new Error('El parámetro no debe ser null');
  }
  let suma = 0;
  arrayDeEnteros.forEach(entero => {
    suma += entero;
  });
  return suma;
};

module.exports.sumaArray = sumaArray;

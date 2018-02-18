const test = require('tape');
const { sumaArray } = require('./suma-array');

test('Prueba de la función que suma arrays', (t) => {
  t.equals(sumaArray([]), 0, 'La suma de un array vacio debe ser cero');

  t.equals(sumaArray([2]), (0 + 2), 'La suma de un array con el valor 2 debe ser 2');

  t.equals(sumaArray([2, 3, 2, 1]), (0 + 2 + 3 + 2 + 1), 'La suma de un array [2, 3, 2, 1] debe ser 8');

  t.throws(() => sumaArray(null), 'El parámetro no debe ser null', 'Debería devolver un error si el parámetro es null');

  t.throws(() => sumaArray([2.1]), 'Solamente se puede sumar enteros', 'solo se debe poder sumar enteros');

  t.throws(() => sumaArray([1, 2.1, 2]), 'Solamente se puede sumar enteros', 'solo se debe poder sumar enteros');

  t.throws(() => sumaArray([2.1, 2, 1]), 'Solamente se puede sumar enteros', 'solo se debe poder sumar enteros');

  t.throws(() => sumaArray([1, 2, 2.1]), 'Solamente se puede sumar enteros', 'solo se debe poder sumar enteros');

  t.end();
});


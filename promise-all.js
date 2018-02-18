const rp = require ('request-promise');
const fs = require ('fs');
const path = require ('path');

var tema1 = rp('https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime');

const grupo = 'Coldplay';
const temas = ['Adventure of a Lifetime', 'Yellow', 'Clock', 'The Scientist'];

const urls = temas.map((tema) => {
  return `https://api.lyrics.ovh/v1/${grupo}/${tema}`;
});

Promise.all(urls.map(url => rp(url)))
  .then(respuestas => {
      return Promise.all(respuestas.map((respuesta, index) => {
        const letraJson = JSON.parse(respuesta);
        return escribirArchivo(temas[index], letraJson.lyrics);
      }));
  })
  .then(resultados => {
    
  })
  .catch((err) => {
    console.log('--------------------ERROR---------------------------');
    console.log(err);
    console.log('-----------------------------------------------');
    throw err;
  });

/**
 * Escribe un archivo con un contenido
 * @param  {String} nombreArchivo Nombre del archivo que se escribirá
 * @param  {String} contenido Contenido del archivo
 * @returns Devuelve una promesa que cuando es exitosa devuelva un mensaje, cuando la promesa es rechazada devuelve un error
 */
const escribirArchivo = (nombreArchivo, contenido) => {
  return new Promise((resolve, reject) => {
    const rutaArchivo = path.join(__dirname, 'letras', nombreArchivo);
    fs.writeFile(rutaArchivo, contenido, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve({
        respuesta: 'guardado con éxito !!!',
      });
    });
  });
};
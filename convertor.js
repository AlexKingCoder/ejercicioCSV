const fs = require('fs');
const Papa = require('papaparse');

/* Investigué que la extensión Papaparse es muy útil para trabajar con archivos csv en JS, así que la instalé
para utilizarla en el ejercicio. RainbowCSV también va genial para leer los csv con un poco de colorido. */

fs.readFile('fictional.csv', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    const resultados = Papa.parse(data, { header: true });

    const jsonData = JSON.stringify(resultados.data, null, 2);

    fs.writeFile('FileConverted.json', jsonData, (err) => {
        if (err) {
            console.error('Error al guardar el archivo JSON:', err);
            return;
        }
        console.log('Archivo JSON guardado exitosamente.');
    });
});
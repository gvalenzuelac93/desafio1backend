const fs = require('fs');

function registrar(nombre, edad, tipo, color, enfermedad) {
    const nuevaCita = { nombre, edad, tipo, color, enfermedad };
    const citas = JSON.parse(fs.readFileSync('./citas.json', 'utf-8'));
    citas.push(nuevaCita);
    fs.writeFileSync('./citas.json', JSON.stringify(citas, null, 2));
    console.log("Cita registrada con éxito.");
}

function leer() {
    const citas = JSON.parse(fs.readFileSync('./citas.json', 'utf-8'));
    console.log(citas);
}

module.exports = { registrar, leer };
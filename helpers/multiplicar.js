const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log('=============='.green);
            console.log('tabla del:'.green, colors.blue(base))
            console.log('=============='.green);
            console.log(salida);
        } else {
            return (`tabla-${base}.txt creada`);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return (`tabla-${base}.txt creada`);

    } catch (error) {

    }
}


module.exports = {
    crearArchivo
}
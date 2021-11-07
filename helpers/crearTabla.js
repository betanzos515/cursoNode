const fs = require('fs');
const color = require('colors');
const crearArchivo = async ( base=5,listar=false, hasta = 10 ) => {
    
    let salida = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} * ${i} = ${base * i} \n`;
    }

    fs.writeFile(`Tabla${base}.txt`, salida, (error) => {
        if (error) throw error;
        console.log("El archivo se creó correctamente".underline.green);
    });
    
    if(listar){
        console.log(color.yellow("========================="));
        console.log(`Tabla del : ${base}`.underline.green);
        console.log(color.yellow("========================="));
        console.log(salida.underline.blue);
    }

   return `tabla-${base}.txt`;
  };

module.exports = {
    crearArchivo
}
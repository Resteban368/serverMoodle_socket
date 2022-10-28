

//obtener fecha y la hora  actual del servidor y exportarla 

const getHora = (req, res) => {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var año = fecha.getFullYear();
    var fechaActual = dia + "/" + mes + "/" + año + " " + hora + ":" + minutos + ":" + segundos;
    res.json({
        ok: true,
        fechaActual
    })
}


//exportar la funcion
module.exports = {
    getHora
}

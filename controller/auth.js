const { response } = require("express")

const crearUsuario = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'login!!!!'
    })
}
module.exports = {
    crearUsuario
}
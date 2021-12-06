const { response } = require('express');

const usuariosGet = (req, res = response) => {
    const {q, nombre = 'No name', apiKey} = req.query;

    res.json({
        msg: 'get API - controller',
        q,
        nombre,
        apiKey
    });
}

const usuariosPut = (req, res = response) => {
    const id = req.params;

    res.status(400).json({
        ok: true,
        msg: "put API - controller",
        id
    });
}

const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;

    res.status(201).json({
        ok: true,
        nombre,
        edad
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'patch API - controller'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - controller'
    });
}
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}
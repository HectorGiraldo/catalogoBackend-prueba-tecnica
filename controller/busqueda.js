const { response } = require('express');
const Graphics = require('../models/graphics');



const getTodo = async(req, res = response ) => {

    const busqueda = req.params.busqueda;
    const regex = new RegExp( busqueda, 'i' );

    const graphics = await Graphics.find({ name: regex });

    res.json({
        ok: true,
        graphics,
    })


    
}

const getById = async(req, res = response ) => {

    const id = req.params.id;

    const graphics = await Graphics.findById({"_id": id});

 
    res.json({
        ok: true,
        graphics,
    })


    
}

module.exports = {
    getTodo,
    getById
}
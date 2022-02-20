const Graphics = require('../models/graphics')

const getGraphics = async(req, res)=> {

    const graphics = await Graphics.find();


    res.json({
        ok: true,
        graphics
    })
}

const crearGraphics = async (req, res)=> {

    const {name, manufacturer, model, assembler, price, img} = req.body;

    const graphics = new Graphics(req.body);

    await graphics.save();

    res.json({
        ok: true,
        graphics
    })
}

module.exports = {
    getGraphics,
    crearGraphics
}
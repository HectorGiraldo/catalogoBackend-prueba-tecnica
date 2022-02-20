
const { Schema, model } = require('mongoose');


const GraphicsSchema = Schema({

    name: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    assembler: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }

});


// GraphicsSchema.method('toJSON', function() {
//     const { __v, _id,  ...object } = this.toObject();
//     object.uid = _id;
//     return object;
// })

module.exports = model('Graphics', GraphicsSchema);
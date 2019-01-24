const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    serialNumber: {type: String, require: true},
    isNotUsed: {type: Boolean, require: true},
    photo: {type: String, require: true},
    title: {type: String, require: true},
    type: {type: mongoose.Schema.Types.ObjectId, ref: 'Types', require: true},
    specification: {type: String, require: true},
    guarantee: {
        start: {type: Date, require: true},
        end: {type: Date, require: true}
    },
    price: [{
        value: {type: Number, require: true},
        symbol: {type: String, require: true},
        isDefault: {type: Boolean, require: true}
    }],
    order: {type: Number, require: true},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Products', productSchema);
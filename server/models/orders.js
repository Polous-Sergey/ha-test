const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    title: {type: String, require: true},
    date: {type: Date, default: Date.now},
    description: {type: String, require: true},
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Products', require: true}]
});

module.exports = mongoose.model('Orders', ordersSchema);
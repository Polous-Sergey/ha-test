const mongoose = require('mongoose');
const Orders = mongoose.model('Orders');
const productsService = require('./products.service');

module.exports = {
    getAll,
    getById,
    create,
    delete: _delete
};

async function getAll() {
    return await Orders.find();
    // return await Orders.find().populate('products');
}

async function getById(id) {
    return await Orders.findById(id).populate('products');
}

async function create(orderParam) {

    // validate
    if (!orderParam.title || !orderParam.description || !orderParam.products) {
        throw 'All fields required';
    }

    let title = orderParam.title.trim();
    let description = orderParam.description.trim();
    let products = orderParam.products;

    if (title.length < 1) throw 'Title must be at least 1 symbol long';
    if (description.length < 1) throw 'Description must be at least 1 symbol long';
    if (!Array.isArray(products) || !products.length) throw 'Products must contain only array of products ids';

    let tmpProducts;

    try {
        tmpProducts = await Promise.all(products.map(productId => productsService.getById(productId)));
    } catch (err) {
        throw 'Invalid product id';
    }

    if (!tmpProducts.every(product => product)) throw 'Invalid product id';

    const order = new Orders();
    order.title = title;
    order.description = description;
    order.products = products;

    // save order
    return await order.save();
}

async function _delete(id) {
    await Orders.findByIdAndRemove(id);
}
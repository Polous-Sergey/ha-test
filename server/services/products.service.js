const mongoose = require('mongoose');
// const sharp = require('sharp');
const Products = mongoose.model('Products');
const typesService = require('./types.service');

module.exports = {
    getAll,
    getById,
    create,
    delete: _delete
};

async function getAll() {
    return await Products.find().populate('type');
}

async function getById(id) {
    return await Products.findById(id).populate('type');
}

async function create(productParam, file) {

    // validate
    if (!productParam.serialNumber || !productParam.isNotUsed ||
        !file || !productParam.title || !productParam.type ||
        !productParam.specification || !productParam.guarantee ||
        !productParam.price || !productParam.order) {
        throw 'All fields required';
    }

    let serialNumber = productParam.serialNumber.trim();
    let isNotUsed = productParam.isNotUsed.trim() === 'true';
    let photo = file.path;
    let title = productParam.title.trim();
    let type = productParam.type.trim();
    let specification = productParam.specification.trim();
    let order = +productParam.order.trim();

    let guarantee;
    let price;


    if (serialNumber.length < 1) throw 'Serial number must be at least 1 symbol long';
    if (title.length < 1) throw 'Name must be at least 1 symbol long';
    if (type.length < 5) throw 'Invalid type id';
    if (specification.length < 1) throw 'Specification must be at least 1 symbol long';
    if (!order) throw 'Order must be a number more than 0';

    try {
        guarantee = JSON.parse(productParam.guarantee);
    } catch (err) {
        throw 'Invalid guarantee JSON'
    }

    try {
        price = JSON.parse(productParam.price);
    } catch (err) {
        throw 'Invalid price JSON'
    }

    if (!Object(guarantee) || !guarantee.start || !guarantee.end) throw 'Price must contain only array of price';
    guarantee.start = new Date(guarantee.start);
    if (!Boolean(+guarantee.start)) throw 'Invalid date format in guarantee.start';
    guarantee.end = new Date(guarantee.end);
    if (!Boolean(+guarantee.end)) throw 'Invalid date format in guarantee.end';

    if (!Array.isArray(price) || !price.length) throw 'Guarantee must contain only object of guarantee';
    price = price.map((price) => {

        if (!price.value || !price.symbol || !price.isDefault) {
            throw 'All fields required';
        }

        let value = +price.value.trim();
        let symbol = price.symbol.trim().toUpperCase();
        let isDefault = price.isDefault.trim() === 'true';

        if (!value) throw 'Price value must be a number more than 0';
        if (symbol.length < 2) throw 'Price symbol must be at least 1 symbol long';

        return {
            value,
            symbol,
            isDefault
        }
    });

    let tmpType;

    try {
        tmpType = await typesService.getById(type);
    } catch (err) {
        throw 'Invalid type id';
    }

    if (!tmpType) throw 'Invalid type id';

    // try {
    //     let imageBuffer = await sharp(file.path)
    //         .resize(400, 200)
    //         .toFile(`resize/${file.originalname}`);
    // } catch (err) {
    //     throw err;
    // }

    const product = new Products();
    product.serialNumber = serialNumber;
    product.isNotUsed = isNotUsed;
    product.photo = photo;
    product.title = title;
    product.type = type;
    product.specification = specification;
    product.guarantee = guarantee;
    product.price = price;
    product.order = order;

    // save product
    return await product.save();
}

async function _delete(id) {
    await Products.findByIdAndRemove(id);
}
const mongoose = require('mongoose');
const sharp = require('sharp');
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
    let a = new Date('a');
    console.log(typeof a);
    console.log(a);
    console.log(a === null);

    return {a: a};

    if (!Array.isArray(price) || !price.length) throw 'Guarantee must contain only object of guarantee';

    // if (title.length < 1) throw 'Name must be at least 1 symbol long';
    // // if (title.length > 5) throw 'Name must be no more than 5 symbol long';
    // if (!price) throw 'Price must contain only numbers';
    // if (price < 1) throw 'Price must be more than 1';
    // if (!year) throw 'Year must contain only numbers';
    // if (year < 1000 || year > 9999) throw 'Year must contain only 4 digits';
    // if (type.length < 5) throw 'Invalid genre id';

    // try {
    //     if (!await typesService.getById(type)) {
    //         throw ''
    //     }
    // } catch (err) {
    //     throw 'Invalid type id';
    // }

    throw 'aaaaaaaa';

    // try {
    //     let imageBuffer = await sharp(file.path)
    //         .resize(400, 200)
    //         .toFile(`resize/${file.originalname}`);
    // } catch (err) {
    //     throw err;
    // }
    //
    // const product = new Products();
    // product.serialNumber = serialNumber;
    // product.isNotUsed = isNotUsed;
    // product.photo = photo;
    // product.title = title;
    // product.type = type;
    // product.specification = specification;
    // product.guarantee = guarantee;
    // product.price = price;
    // product.order = order;
    //
    // // save product
    // return await product.save();
}

async function _delete(id) {
    await Products.findByIdAndRemove(id);
}
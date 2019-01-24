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

    console.log(typeof productParam);
    console.log(typeof productParam.guarantee);
    // throw productParam;


    // validate
    // if (!productParam.title || !productParam.serialNumber ||
    //     !productParam.type || !file ||
    //     !typeof productParam.isNotUsed !== 'boolean' || !productParam.specification ||
    //     !productParam.guarantee.start || !productParam.guarantee.end ||
    //     !productParam.price.length || !productParam.order) {
    //     throw 'All fields required';
    // }
    let serialNumber = productParam.serialNumber.trim();
    let isNotUsed = !!productParam.isNotUsed;
    let photo = file.path;
    let title = productParam.title.trim();
    let type = productParam.type.trim();
    let specification = productParam.specification.trim();

    let guarantee = JSON.parse(productParam.guarantee);

    let price = JSON.parse(productParam.price);

    let order = +productParam.order.trim();


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

    try {
        let imageBuffer = await sharp(file.path)
            .resize(400, 200)
            .toFile(`resize/${file.originalname}`);
    } catch (err) {
        throw err;
    }

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
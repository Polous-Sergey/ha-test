const productsService = require('../services/products.service');

module.exports = {
    create,
    productsList,
    productById,
    delete: _delete
};

async function create(req, res, next) {
    productsService.create(req.body, req.file)
        .then(product => res.status(200).json(product))
        // .catch(err => next(err));
        .catch(err => res.status(201).json(err));
}

function productsList(req, res, next) {
    productsService.getAll()
        .then(products => res.status(200).json(products))
        .catch(err => next(err));
}

function productById(req, res, next) {
    productsService.getById(req.params.id)
        .then(product => product ? res.status(200).json(product) : res.sendStatus(404))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    productsService.delete(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(err => next(err));
}



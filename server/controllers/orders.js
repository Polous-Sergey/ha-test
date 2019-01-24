const ordersService = require('../services/orders.service');

module.exports = {
    create,
    ordersList,
    orderById,
    delete: _delete
};

async function create(req, res, next) {
    ordersService.create(req.body)
        .then(order => res.status(200).json(order))
        .catch(err => next(err));
}

function ordersList(req, res, next) {
    ordersService.getAll()
        .then(orders => res.status(200).json(orders))
        .catch(err => next(err));
}

function orderById(req, res, next) {
    ordersService.getById(req.params.id)
        .then(order => order ? res.status(200).json(order) : res.sendStatus(404))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    ordersService.delete(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(err => next(err));
}



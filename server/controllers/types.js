const typesService = require('../services/types.service');

module.exports = {
    create,
    typesList,
    typeById,
    delete: _delete
};

async function create(req, res, next) {
    typesService.create(req.body)
        .then(type => res.status(200).json({type}))
        .catch(err => next(err));
}

function typesList(req, res, next) {
    typesService.getAll()
        .then(types => res.status(200).json(types))
        .catch(err => next(err));
}

function typeById(req, res, next) {
    typesService.getById(req.params.id)
        .then(type => type ? res.status(200).json(type) : res.sendStatus(404))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    typesService.delete(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(err => next(err));
}
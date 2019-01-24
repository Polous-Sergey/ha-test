const mongoose = require('mongoose');
const Types = mongoose.model('Types');

module.exports = {
    getAll,
    getById,
    create,
    delete: _delete
};

async function getAll() {
    return await Types.find();
}

async function getById(id) {
    return await Types.findById(id);
}

async function create(typeParam) {
    // validate
    if (!typeParam.name) {
        throw 'Name field required';
    }

    let name = typeParam.name.trim();

    if(name.length < 3) throw 'Name must be at least 3 letters long';

    if (await Types.findOne({ name: name })) {
        throw 'Type "' + name + '" is already taken';
    }

    const type = new Types();
    type.name = name;

    // save type
    return await type.save();
}

async function _delete(id) {
    await Types.findByIdAndRemove(id);
}
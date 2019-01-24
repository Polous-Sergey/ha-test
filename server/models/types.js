const mongoose = require('mongoose');

const typesSchema = new mongoose.Schema({
    name: {type: String, require: true, unique: true},
});

module.exports = mongoose.model('Types', typesSchema);
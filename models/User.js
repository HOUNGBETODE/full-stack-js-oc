const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); //installer le package mongoose-unique-validator pour enregistrer des données uniques

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
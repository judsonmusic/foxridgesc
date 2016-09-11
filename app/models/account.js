var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var date = new Date();
var AccountSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    familyName: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
    phone: String,
    activities: String,
    image: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Account', AccountSchema);

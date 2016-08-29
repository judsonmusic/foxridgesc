var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var date = new Date();
var AccountSchema   = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
},{
  timestamps: true
});

module.exports = mongoose.model('Account', AccountSchema);

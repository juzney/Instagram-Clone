const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rocketinsta', console.log('mongodb running'))


mongoose.Promisse = global.Promisse;


module.exports = mongoose;
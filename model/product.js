var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({

    productId: { type: Number, required: true },
    tag: { type: String, required: true },

})
var Product = mongoose.model('products_data', userSchema);
module.exports = Product;
var Product = require('../model/product');

const add_product = function (req, res) {
    var add = new Product({

        productId: req.body.productId,
        tag: req.body.tag,

    })
    add.save(function (err, result) {


        if (err) {
            return res.status(412).send({
                success: false,
                message: err
            })
        }
        else {
            console.log(result)
            return res.status(200).json({
                success: true,
                message: "Product Successfully Added"
            });


        }
    })
}

const like_product = function (req, res) {
    var id = req.params.version;

    Product.find({ productId: id }, function (err, result) {
        if (err) {
            return res.status(412).send({
                success: false,
                message: err
            })
        }
        else {
            var tags = result.map((a) => (a.tag));

            var tags_name = tags.toString();

            Product.find({ tag: { $regex: tags_name, $options: '$i' } }, { limit: 5 }, function (error, doc) {

                if (error) {
                    return res.status(412).send({
                        success: false,
                        message: error
                    })

                }
                else {

                    return res.status(200).json({
                        success: true,
                        message: doc
                    });
                }

            })
        }
    })
}

const dislike_product = function (req, res) {
    var id = req.params.version;
    console.log(id)
    Product.find({ productId: id }, function (err, result) {
        if (err) {
            return res.status(412).send({
                success: false,
                message: err
            })
        } else {
            return res.status(200).json({
                success: true,
                message: result
            });
        }
    })
}

const delete_product = function (req, res) {

    var id = req.params.id;
    Product.findByIdAndRemove(id, function (err, result) {
        if (err) {
            return res.status(412).send({
                success: false,
                message: err
            })
        }
        return res.status(200).json({
            success: true,
            message: "Product Successfully deleted"
        });

    })




}

const list = function (req, res) {
    Product.find({}, function (err, doc) {
        if (err) {
            console.log(err)
        }
        res.send(doc)
    })
}











module.exports = {
    add_product,
    like_product,
    dislike_product,
    delete_product,
    list
}
var express = require('express');
var ProductC = require('../controller/Product');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/add', ProductC.add_product);
router.get('/like/:version', ProductC.like_product);
router.get('/dislike/:version', ProductC.dislike_product);
router.delete('/delete/:id', ProductC.delete_product);
router.get('/list/', ProductC.list);






module.exports = router;

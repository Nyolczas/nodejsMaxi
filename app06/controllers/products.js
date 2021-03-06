const Product = require('../models/product');

// /admin/add-product => GET
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
}

// /admin/add-product => POST
exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

// shop
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
      res.render('shop', {
          prods: products, 
          pageTitle: 'Shop', 
          path: '/'});
  });
};
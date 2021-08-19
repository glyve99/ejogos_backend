const express = require('express');
const routes = express.Router();
const multer = require('multer');

const UserController = require('./Controllers/UserController');
const ProductController = require('./Controllers/ProductController');
const BrandController = require('./Controllers/BrandController');
const CategoryController = require('./Controllers/CategoryController');
const AddressController = require('./Controllers/AddressController');

const authMiddleware = require('./middlewares/auth');

routes.get('/', (req, res) => {
    return res.status(200).json('ejogos_API');
});

routes.post('/login', UserController.login);
routes.post('/users', UserController.save);
routes.get('/users', UserController.list);
routes.put('/users/:id_user', UserController.edit);
routes.delete('/users/:id_user',  UserController.delete);

routes.post('/products', ProductController.save);
routes.get('/products', ProductController.list);
routes.put('/products/:id_product',  ProductController.edit);
routes.delete('/products/:id_product',  ProductController.delete);

routes.post('/brand', BrandController.save);
routes.get('/brand', BrandController.list);
routes.put('/brand/:id_brand', BrandController.edit);
routes.delete('/brand/:id_brand', BrandController.delete);

routes.post('/address', AddressController.save);
routes.get('/address', AddressController.list);
routes.put('/address/:id_address', AddressController.edit);
routes.delete('/address/:id_address', AddressController.delete);

routes.post('/category', CategoryController.save);
routes.get('/category', CategoryController.list);
routes.put('/category/:id_category', CategoryController.edit);
routes.delete('/category/:id_category', CategoryController.delete);

module.exports = routes;
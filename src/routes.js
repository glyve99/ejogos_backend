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
routes.put('/users/:id_user', authMiddleware, UserController.edit);
routes.delete('/users/:id_user',  UserController.delete);

routes.post('/products', authMiddleware, ProductController.save);
routes.get('/products', ProductController.list);
routes.put('/products/:id_product', authMiddleware, ProductController.edit);
routes.delete('/products/:id_product', authMiddleware, ProductController.delete);

routes.post('/brands', authMiddleware, BrandController.save);
routes.get('/brands', BrandController.list);
routes.put('/brands/:id_brands', authMiddleware, BrandController.edit);
routes.delete('/brands/:id_brands', authMiddleware, BrandController.delete);

routes.post('/address', AddressController.save);
routes.get('/address', AddressController.list);
routes.put('/address/:id_address', authMiddleware, AddressController.edit);
routes.delete('/address/id_address', AddressController.delete);

routes.post('/category', CategoryController.save);
routes.get('/category', CategoryController.list);
routes.put('/category/:id_category', authMiddleware, CategoryController.edit);
routes.delete('/category/id_category', CategoryController.delete);

module.exports = routes;
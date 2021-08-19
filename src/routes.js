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
routes.get('/users', authMiddleware, UserController.list);
routes.put('/users/:id_user', authMiddleware, UserController.edit);
routes.delete('/users/:id_user', authMiddleware, UserController.delete);

routes.post('/products', authMiddleware, ProductController.save);
routes.get('/products', ProductController.list);
routes.put('/products/:id_product', authMiddleware, ProductController.edit);
routes.delete('/products/:id_product', authMiddleware, ProductController.delete);

routes.post('/brands', authMiddleware, BrandController.save);
routes.get('/brands', BrandController.list);
routes.put('/brands/:id_brands', authMiddleware, BrandController.edit);
routes.delete('/brands/:id_brands', authMiddleware, BrandController.delete);

routes.post('/address', AddressController.save);

routes.post('/categories', CategoryController.save)


module.exports = routes;
const express = require('express');
const router = express.Router();
const jwt = require('../config/jwt')();
const upload = require('../config/multer')();

const ctrlUsers = require('../controllers/users');
const ctrlTypes = require('../controllers/types');
const ctrlProducts = require('../controllers/products');
const ctrlOrders = require('../controllers/orders');

// users
router.post('/users', ctrlUsers.register);
router.post('/users/auth', ctrlUsers.login);
router.get('/users', jwt, ctrlUsers.userList);
router.get('/users/:id', jwt, ctrlUsers.userById);

// types
router.get('/types', ctrlTypes.typesList);
router.get('/types/:id', ctrlTypes.typeById);
router.post('/types', ctrlTypes.create);
router.delete('/types/:id', ctrlTypes.delete);

// products
router.get('/products', ctrlProducts.productsList);
router.get('/products/:id', ctrlProducts.productById);
router.post('/products', upload.single('photo'), ctrlProducts.create);
router.delete('/products/:id', ctrlProducts.delete);

// orders
router.get('/orders', ctrlOrders.ordersList);
router.get('/orders/:id', ctrlOrders.orderById);
router.post('/orders', ctrlOrders.create);
router.delete('/orders/:id', ctrlOrders.delete);

module.exports = router;

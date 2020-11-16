const express = require('express');
const ProductsRequests = require('./products-requests');
const router = express.Router();

router.get('/products', ProductsRequests.list);
router.get('/products/:id', ProductsRequests.getById);
router.post('/products', ProductsRequests.create);
router.post('/products/:id/remove', ProductsRequests.remove);
router.put('/products/:id', ProductsRequests.update);
router.delete('/products/:id', ProductsRequests.delete);

module.exports = router;

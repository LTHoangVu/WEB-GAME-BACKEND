const express = require('express');

const gameController = require('../controllers/game');

const router = express.Router();

router.get('/', gameController.getGames);

router.get('/:productId', gameController.getGame);

// router.post('/post-product', productController.createProduct);

// router.put('/update-product/:productId', productController.updateProduct);

// router.delete('/delete-product/:productId', productController.deleteProduct);

module.exports = router;

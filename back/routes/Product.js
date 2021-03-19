const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.get("/", productController.getAll);

router.get('/:id', productController.getOne);

// Por nombre
router.get("/name/:name", productController.getByName);

// Por categoria
router.get("/category/:category", productController.getByCategorie);


router.put('/:id', productController.productUpdate)

router.post('/', productController.createProduct);


router.delete("/:id", productController.deleteProduct);

module.exports = router;

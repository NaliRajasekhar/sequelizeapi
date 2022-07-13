// // import controllers review, products
// // const productController = require('../controllers/productController.js')
// // const reviewController = require('../controllers/reviewController')
// // const express = require('express')
// // const app = express()
// // // router
// // const router = require('express').Router()


// // // use routers
// // router.post('/addProduct', productController.upload , productController.addProduct)

// // router.get('/allProducts', productController.getAllProducts)

// // router.get('/published', productController.getPublishedProduct)



// // // Review Url and Controller

// // router.get('/allReviews', reviewController.getAllReviews)
// // router.post('/addReview/:id', reviewController.addReview)

// // // get product Reviews
// // router.get('/getProductReviews/:id', productController.getProductReviews)




// // // Products router
// // router.get('/:id', productController.getOneProduct)

// // router.put('/:id', productController.updateProduct)

// // router.delete('/:id', productController.deleteProduct)

// // app.use('/api/products', router)

// // module.exports = router

// var products = require("../controllers/productController.js");
// /**
//  * Routing list for the session apis
//  */
// var productRoute = (app) => {

//   //landing page 

//   app.post("/api/products",products.addProduct);

 
// };

// module.exports = productRoute;

 // import controllers review, products
// const productController = require('../controllers/productController.js')
 //const reviewController = require('../controllers/reviewController')


// router
// const router = require('express').Router()


// use routers
// router.post('/addProduct', productController.upload , productController.addProduct)

// router.get('/allProducts', productController.getAllProducts)

// router.get('/published', productController.getPublishedProduct)



 //Review Url and Controller

// router.get('/allReviews', reviewController.getAllReviews)
// router.post('/addReview/:id', reviewController.addReview)

 //get product Reviews
// router.get('/getProductReviews/:id', productController.getProductReviews)




// Products router
// router.get('/:id', productController.getOneProduct)

// router.put('/:id', productController.updateProduct)

// router.delete('/:id', productController.deleteProduct)

//module.exports = router 

module.exports = app => {
    const products = require("../controllers/productController.js");
    const reviews = require('../controllers/reviewController.js')
  
    var router = require("express").Router();
  
    // Create a new prodcuct
    router.post("/addProduct", products.addProduct);
    router.get('/', products.getAllProducts)
    router.put('/:id', products.updateProduct)
    router.get('/:id', products.getOneProduct)
    router.delete("/:id", products.deleteProduct);

    //review 
    router.get('/allReviews', reviews.getAllReviews)
    router.post('/addReview/:id', reviews.addReview)
    
    app.use('/api/products', router);
  };

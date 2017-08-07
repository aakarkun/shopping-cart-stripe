var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: '/images/sweat_shirt2.jpg',
        title: 'Army Color Round Neck',
        description: 'Winter clothes, Round Neck Sweat Shirt in Army color!!',
        price: 20
    }),
    new Product({
        imagePath: '/images/sweat_shirt1.jpg',
        title: 'Jaded Round Neck',
        description: 'Winter clothes, Round Neck Sweat Shirt!!',
        price: 25
    }),
    new Product({
        imagePath: '/images/sweat_shirt3.png',
        title: 'Twin Tees - Sweat Shirt',
        description: 'Twin Tees presents Winter clothes, Round Neck Sweat Shirt Black!!',
        price: 35
    }),
    new Product({
        imagePath: '/images/sweat_shirt1.jpg',
        title: 'Jaded Round Neck',
        description: 'Winter clothes, Round Neck Sweat Shirt!!',
        price: 25
    })
];

done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done == products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
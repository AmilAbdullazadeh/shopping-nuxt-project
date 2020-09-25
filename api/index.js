const express = require('express');
const session = require('express-session');
const app = express()

app.use(session({
    secret: "4m1l"
}))

app.get("/", (req, res) => {
    let cart = []

    if (cart.session.cart) {
        cart = req.session.cart
    }

    // Total Price
    let cartTotalPrice = 0.0

    cart.forEach(item => {
        cartTotalPrice += item.totalPrice
    })

    req.session.cart = cart

    console.log("Products was sent")
    res.status(200).json({
        products: [
            {id: 1, title: "Corek", price: 0.30},
            {id: 2, title: "Qaymaq", price: 30},
            {id: 3, title: "Dondurma", price: 10},
            {id: 4, title: "Coca-Cola", price: 12},
            {id: 5, title: "Hell", price: 1.5}
        ],
        cart: {
            items: cart,
            totalPrice: cartTotalPrice
        }
    })
});

app.post('/add-to-cart', (req, res) => {
    console.log(req)

    let product = req.body.product

    let cart = []

    if (req.session.cart) {
        cart = req.session.cart
    }

    if (cart.length > 0) {
        console.log("cart is working")
        let itemIndex = cart.findIndex(item => item.id === product.id)
        if (itemIndex > -1) {
            cart[itemIndex].count += product.count
            cart[itemIndex].totalPrice = cart[itemIndex].count * cart[itemIndex].price
        } else {
            cart.push({
                ...product,
                totalPrice: product.count * product.price
            })
        }
    } else {
        cart.push({
            ...product,
            totalPrice: product.count * product.price
        })
    }

    // Total Price
    let cartTotalPrice = 0.0

    cart.forEach(item => {
        cartTotalPrice += item.totalPrice
    })

    req.session.cart = cart

    res.status(200).json({
        cart: {
            items: req.session.cart,
            totalPrice: cartTotalPrice
        }
    })
});

app.post("/change-count", (req, res) => {
    let product = req.body.product

    let cart = []

    if (req.session.cart) {
        console.log("Session was found")
        cart = req.session.cart
    }

    // Total Price
    let cartTotalPrice = 0.0

    cart.forEach(item => {
        cartTotalPrice += item.totalPrice
    })

    req.session.cart = cart

    res.status(200).json({
        cart: {
            items: req.session.cart,
            totalPrice = cartTotalPrice
        }
    })
});

app.post("/remove-product", ((req, res) => {
    let product = req.body.product
    let cart = []

    if (req.session.cart) {
        cart = req.session.cart
    }

    let productIndex = cart.findIndex(item = item.id === product.id)

    if (productIndex > -1) {
        cart.splice(productIndex, 1)
        req.session.cart = cart
    }

    // Total Price
    let cartTotalPrice = 0.0

    cart.forEach(item => {
        cartTotalPrice += item.totalPrice
    })

    req.session.cart = cart

    res.status(200).json({
        cart: {
            items: req.session.cart,
            totalPrice = cartTotalPrice
        }
    })
}))

module.exports = {
    path: "/api",
    handler: app
}
import Vuex from "vuex"

export const state = () => ({
    products: [],
    cart: [],
    totalPrice: 0.0
})

export const actions = {
    nuxtServerInit(vuexContext, context) {
        console.log("Server is working")
        const response = context.$axios.get("/")
            .then(response => {
                console.log("Response: " + response.data.products)
                vuexContext.commit("setProducts", response.data.products)
                vuexContext.commit("setCart", response.data.cart.items)
                vuexContext.commit("setTotalPrice", response.data.cart.totalPrice)
            }).catch(e => console.log(e))
        return response
    },
    addToCart(vuexContext, product) {
        this.$store.post("/add-to-cart", {product: product})
            .then(response => {
                vuexContext.commit("setCart", response.data.cart.items)
                vuexContext.commit("setTotalPrice", response.data.cart.totalPrice)
            }).catch(e => console.log(e))
    },
    removeProduct(vuexContext, product) {
        this.$axios.post("/remove-product", {product: product})
            .then(response => {
                vuexContext.commit("setCart", response.data.cart.items)
                vuexContext.commit("setTotalPrice", response.data.cart.totalPrice)
            })
    },
    changeCount(vuexContext, product) {
        this.$axios.post("/change-count", {product: product})
            .then(response => {
                vuexContext.commit("setCart", response.data.cart.items)
                vuexContext.commit("setTotalPrice", response.data.cart.totalPrice)
            })
    }
}

export const getters = {
    getProducts(state) {
        return state.products
    },
    getCart(state) {
        return state.cart
    },
    getTotalPrice(state) {
        return state.totalPrice
    }
}

export const mutations = {
    setProducts(state, products) {
        state.products = products;
    },
    setCart(state, cart) {
        state.cart = cart
    },
    setPrice(state, totalPrice) {
        state.totalPrice = totalPrice
    },
}
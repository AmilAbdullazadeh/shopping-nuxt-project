import Vuex from "vuex"

export const state = () => ({
    products: [],
    cart: [],
    totalPrice: 0.0
})

export const actions = {
    async nuxtServerInit(vuexContext, context) {
        console.log("Server is working")
        const response = await context.$axios.$get("http://localhost:3000/api")
            .then(response => {
                vuexContext.commit("setProducts", response.data.products)
                vuexContext.commit("setCart", response.data.products)
            }).catch(e => console.log(e))

    },
    addToCart(vuexContext, product) {
        this.$store.post("/add-to-cart", {product: product})
            .then(response => {
                vuexContext.commit("setCart", response.data.cart.items)
            }).catch(e => console.log(e))
    },
    removeProduct(vuexContext, product) {
    },
    changeCount(vuexContext, product) {
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
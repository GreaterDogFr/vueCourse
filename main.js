const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
        }
    },
    methods: {
        addToCart(id) {
            this.cart.push(id)
        },
        remFromCart(id) {
            this.cart.pop(id)
        }
    }
})

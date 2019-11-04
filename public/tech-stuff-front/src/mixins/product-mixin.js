export default {
  props: {
    id: {
      type: Number,
      default: null
    },
    name: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: null
    },
    image: {
      type: String,
      default: ''
    },
    brand: {
      type: String,
      default: ''
    },
    inStock: {
      type: Number,
      default: 0
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.id);
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.id);
    }
  }
};

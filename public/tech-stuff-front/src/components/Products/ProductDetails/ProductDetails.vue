<template>
  <v-row>
    <v-col cols="10" offset="1">
      <v-card class="product-details">
        <v-container class="py-0 mt-10">
          <v-row v-if="!product">
            <v-col>
              <span>Loading...</span>
            </v-col>
          </v-row>
          <v-row v-else justify="space-between">
            <v-col class="pa-0" cols="auto">
              <v-img
                height="400"
                width="400"
                :src="product.image"
                lazy-src="https://picsum.photos/id/11/10/6"
              ></v-img>
            </v-col>
            <v-col class="d-flex flex-column">
              <h4 class="display-1">{{ product.name }}</h4>
              <span class="subtitle-1 d-block mt-2">{{ product.brand }}</span>
              <span class="font-weight-bold d-block">${{ product.price }}</span>
              <p class="mt-10 font-weight-light">{{ product.description }}</p>
              <v-row>
                <v-col
                  cols="4"
                  offset="8"
                  class="d-flex justify-space-between mt-auto"
                >
                  <v-btn
                    v-if="product.inStock > 0"
                    small
                    depressed
                    class="btn-small"
                    color="secondary"
                    @click="removeFromCart"
                  >
                    <v-icon small>mdi-cart-minus</v-icon>
                  </v-btn>
                  <span v-if="product.inStock > 0">
                    {{ product.inStock }} in Cart
                  </span>
                  <v-btn
                    v-if="product.inStock > 0"
                    small
                    depressed
                    class="btn-small"
                    color="secondary"
                    @click="addToCart"
                  >
                    <v-icon small>mdi-cart-plus</v-icon>
                  </v-btn>
                  <v-btn
                    v-else
                    small
                    block
                    depressed
                    class="btn-full text-capitalize"
                    color="secondary"
                    @click="addToCart"
                  >
                    <v-icon small class="mr-1">mdi-cart-plus</v-icon>
                    Add to Cart
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductDetails',
  computed: {
    ...mapGetters(['product'])
  },
  mounted() {
    this.fetchProduct(this.$route.params.productId);
  },
  methods: {
    ...mapActions(['fetchProduct']),
    addToCart() {},
    removeFromCart() {}
  }
};
</script>

<style lang="scss" scoped></style>

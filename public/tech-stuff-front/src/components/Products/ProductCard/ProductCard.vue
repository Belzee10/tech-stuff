<template>
  <v-card class="product-card" @click="cardClick">
    <v-img
      class="white--text align-end"
      height="150px"
      :src="image"
      lazy-src="https://picsum.photos/id/11/10/6"
    >
      <v-card-title>{{ name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{ brand }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <span class="font-weight-bold price">${{ price }}</span>
    </v-card-text>

    <v-card-actions class="d-flex justify-space-between">
      <v-btn
        v-if="inStock > 0"
        small
        depressed
        class="btn-small"
        color="secondary"
        @click.stop="removeFromCart"
      >
        <v-icon small>mdi-cart-minus</v-icon>
      </v-btn>
      <span v-if="inStock > 0"> {{ inStock }} in Cart </span>
      <v-btn
        v-if="inStock > 0"
        small
        depressed
        class="btn-small"
        color="secondary"
        @click.stop="addToCart"
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
        @click.stop="addToCart"
      >
        <v-icon small class="mr-1">mdi-cart-plus</v-icon>
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { productMixin } from '@/mixins';

export default {
  name: 'ProductCard',
  mixins: [productMixin]
};
</script>

<style lang="scss" scoped></style>

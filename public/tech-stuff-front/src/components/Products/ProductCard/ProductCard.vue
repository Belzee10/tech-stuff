<template>
  <v-card class=" product-card">
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
      <span class="font-weight-bold">${{ price }}</span>
    </v-card-text>

    <v-card-actions>
      <div v-if="inStock > 0">
        <v-btn
          small
          block
          depressed
          class="btn-small"
          color="secondary"
          @click="$emit('remove-from-cart', id)"
        >
          -
        </v-btn>
        <v-btn
          small
          block
          depressed
          class="btn-small"
          color="secondary"
          @click="$emit('add-to-cart', id)"
        >
          +
        </v-btn>
      </div>
      <v-btn
        v-else
        small
        block
        depressed
        class="btn-full text-capitalize"
        color="secondary"
        @click="$emit('add-to-cart', id)"
      >
        <v-icon small class="mr-1">mdi-cart-plus</v-icon>
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProductCard',
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
  }
};
</script>

<style lang="scss" scoped></style>

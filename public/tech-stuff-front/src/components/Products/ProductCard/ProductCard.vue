<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{ brand }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ price }}</div>
    </v-card-text>

    <v-card-actions>
      <div v-if="inStock > 0">
        <v-btn
          class="btn-small"
          color="secondary"
          @click="$emit('remove-from-cart', id)"
        >
          -
        </v-btn>
        <v-btn
          class="btn-small"
          color="secondary"
          @click="$emit('add-to-cart', id)"
        >
          +
        </v-btn>
      </div>
      <v-btn
        v-else
        class="btn-full"
        color="secondary"
        @click="$emit('add-to-cart', id)"
      >
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
      type: String,
      default: ''
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

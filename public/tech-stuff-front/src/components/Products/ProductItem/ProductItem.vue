<template>
  <v-card class="product-item" @click.stop="cardClick">
    <v-container class="py-0">
      <v-row justify="space-between">
        <v-col class="pa-0" cols="auto">
          <v-img
            height="100"
            width="100"
            :src="image"
            lazy-src="https://picsum.photos/id/11/10/6"
          ></v-img>
        </v-col>

        <v-col class="pa-0" cols="5">
          <div class="py-2 d-flex flex-column fill-height">
            <h4 class="body-1">{{ name }}</h4>
            <span class="caption">{{ brand }}</span>
            <span class="font-weight-bold price d-block mt-auto"
              >${{ price }}</span
            >
          </div>
        </v-col>

        <v-col cols="2" class="text-center pa-0">
          <v-row class="flex-column ma-0 fill-height justify-space-between">
            <v-col
              v-if="inStock > 0"
              class="pa-0 d-flex flex-column justify-center align-center"
            >
              <v-btn
                icon
                color="secondary"
                class="btn-small add"
                @click.stop="addToCart"
              >
                <v-icon small>mdi-cart-plus</v-icon>
              </v-btn>
            </v-col>
            <v-col
              v-if="inStock > 0"
              class="pa-0 d-flex flex-column justify-center align-center"
            >
              <span>{{ inStock }}</span>
            </v-col>
            <v-col
              v-if="inStock > 0"
              class="pa-0 d-flex flex-column justify-center align-center"
            >
              <v-btn
                icon
                color="secondary"
                class="btn-small remove"
                @click.stop="removeFromCart"
              >
                <v-icon small>mdi-cart-minus</v-icon>
              </v-btn>
            </v-col>
            <v-col
              v-else
              class="pa-0 d-flex flex-column justify-center align-center"
            >
              <v-btn
                icon
                color="secondary"
                class="btn-full"
                @click.stop="addToCart"
              >
                <v-icon small>mdi-cart-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { productMixin } from '@/mixins';

export default {
  name: 'ProductItem',
  mixins: [productMixin]
};
</script>

<style lang="scss" scoped></style>

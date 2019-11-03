<template>
  <fragment>
    <v-row>
      <v-col cols="2">
        <h3 class="headline pb-2 mt-8">Categories</h3>
        <v-divider class="pb-5"></v-divider>
        <v-alert
          v-if="errorCategories"
          text
          prominent
          icon="mdi-cloud-alert"
          type="error"
        >
          We couldn't load the Categories :(
        </v-alert>
        <categories-filter v-else :categories="getCategories" />
      </v-col>
      <v-col cols="10">
        <v-row>
          <v-col>
            <items-options />
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="product in products" :key="product.id" cols="3">
            <product-card v-bind="product" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </fragment>
</template>

<script>
import CategoriesFilter from '@/components/Categories/CategoriesFilter';
import ItemsOptions from '@/components/Shared/ItemsOptions';
import ProductCard from '@/components/Products/ProductCard';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductsCategories',
  components: { CategoriesFilter, ItemsOptions, ProductCard },
  data: () => ({
    category: 'ALL'
  }),
  computed: {
    ...mapGetters(['categories', 'errorCategories', 'products']),
    getCategories() {
      if (this.categories) {
        return [
          {
            name: 'All',
            value: 'ALL'
          },
          ...this.categories
        ];
      } else return this.categories;
    }
  },
  mounted() {
    this.fetchCategories();
    this.fetchProducts();
  },
  methods: {
    ...mapActions(['fetchCategories', 'fetchProducts'])
  }
};
</script>

<style lang="scss" scoped></style>

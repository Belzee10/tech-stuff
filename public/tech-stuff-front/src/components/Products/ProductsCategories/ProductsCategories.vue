<template>
  <fragment>
    <v-row>
      <v-col cols="2">
        <h3 class="headline pb-2 mt-8">Categories</h3>
        <v-divider class="pb-5"></v-divider>
        <v-alert v-if="errorCategories" dense :icon="false" text type="error">
          We couldn't load the Categories :(
        </v-alert>
        <categories-filter
          v-else
          :categories="getCategories"
          :value="category"
          @check="handleCheck"
        />
      </v-col>
      <v-col cols="10">
        <v-row>
          <v-col>
            <items-options :sort-value="sort" @sort-by-price="handleSort" />
          </v-col>
        </v-row>
        <v-row v-if="errorProducts">
          <v-col cols="6" offset="3">
            <v-alert dense text prominent icon="mdi-cloud-alert" type="error">
              We couldn't load the Products :(
            </v-alert>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col v-for="product in getProducts" :key="product.id" cols="3">
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
    category: 'ALL',
    sort: 'ASC'
  }),
  computed: {
    ...mapGetters([
      'categories',
      'errorCategories',
      'products',
      'errorProducts'
    ]),
    getCategories() {
      if (this.categories) {
        return [
          {
            id: 'ALL',
            name: 'All'
          },
          ...this.categories
        ];
      } else return this.categories;
    },
    getProducts() {
      if (this.products) return this.sortProducts(this.products, this.sort);
      else return this.products;
    }
  },
  mounted() {
    this.fetchCategories();
    this.fetchProducts();
  },
  methods: {
    ...mapActions([
      'fetchCategories',
      'fetchProducts',
      'fetchProductsByCategory'
    ]),
    handleCheck(value) {
      this.category = value;
      if (this.category === 'ALL') this.fetchProducts();
      else this.fetchProductsByCategory(this.category);
    },
    sortProducts(items, predicate) {
      const newItems = [...items];
      if (predicate === 'ASC')
        return newItems.sort((a, b) => a.price - b.price);
      else return newItems.sort((a, b) => b.price - a.price);
    },
    handleSort(value) {
      this.sort = value;
    }
  }
};
</script>

<style lang="scss" scoped></style>

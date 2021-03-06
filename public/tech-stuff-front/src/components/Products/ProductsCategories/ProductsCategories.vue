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
            <items-options
              :sort-value="sort"
              :view-value="view"
              @sort-by-price="handleSort"
              @change-view="handleChangeView"
              @search="handleSearch"
              @clear-search="handleClearSearch"
            />
          </v-col>
        </v-row>
        <v-row v-if="errorProducts">
          <v-col cols="6" offset="3">
            <v-alert dense text prominent icon="mdi-cloud-alert" type="error">
              We couldn't load the Products :(
            </v-alert>
          </v-col>
        </v-row>
        <v-row v-else-if="getProducts && getProducts.length === 0">
          <v-col cols="6" offset="3">
            <v-alert
              color="blue-grey"
              prominent
              dark
              dense
              class="alert-message"
            >
              We sorry. There are not Products to show
            </v-alert>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col
            v-for="product in getProducts"
            :key="product.id"
            :cols="getCols"
          >
            <product-card v-if="view === 'cards'" v-bind="product" />
            <product-item
              v-if="view === 'items'"
              v-bind="product"
            ></product-item>
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
import ProductItem from '@/components/Products/ProductItem';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductsCategories',
  components: { CategoriesFilter, ItemsOptions, ProductCard, ProductItem },
  data: () => ({
    category: 'ALL',
    sort: 'ASC'
  }),
  computed: {
    ...mapGetters([
      'categories',
      'errorCategories',
      'products',
      'errorProducts',
      'view'
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
    },
    getCols() {
      return this.view === 'cards' ? 3 : 4;
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
      'fetchProductsByCategory',
      'changeView',
      'searchProducts'
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
    },
    handleChangeView(value) {
      this.changeView(value);
    },
    handleSearch(value) {
      setTimeout(() => {
        this.searchProducts(value);
      }, 1000);
    },
    handleClearSearch() {
      this.fetchProducts();
    }
  }
};
</script>

<style lang="scss" scoped></style>

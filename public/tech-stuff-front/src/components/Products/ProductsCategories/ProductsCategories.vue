<template>
  <v-row>
    <v-col cols="3">
      <categories-filter :categories="categories" />
    </v-col>
    <v-col cols="9"></v-col>
  </v-row>
</template>

<script>
import CategoriesFilter from '@/components/Categories/CategoriesFilter';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductsCategories',
  components: { CategoriesFilter },
  data: () => ({}),
  computed: {
    ...mapGetters(['categories', 'error'])
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions(['fetchCategories'])
  }
};
</script>

<style lang="scss" scoped></style>

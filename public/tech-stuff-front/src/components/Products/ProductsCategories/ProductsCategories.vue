<template>
  <v-row>
    <v-col cols="3">
      <h3 class="headline">Categories</h3>
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
      <categories-filter v-else :categories="categories" />
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
    ...mapGetters(['categories', 'errorCategories'])
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

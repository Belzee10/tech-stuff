<template>
  <div class="categories-filter">
    <v-checkbox
      v-for="item in categories"
      :key="item.id"
      v-model="value"
      :label="item.name"
    ></v-checkbox>
  </div>
</template>

<script>
export default {
  name: 'CategoriesFilter',
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    value: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped></style>

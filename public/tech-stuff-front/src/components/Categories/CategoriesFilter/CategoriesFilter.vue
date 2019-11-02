<template>
  <div class="categories-filter pa-3">
    <v-checkbox
      v-for="item in categories"
      :key="item.id"
      v-model="value"
      dense
      class="ma-0 pa-0 category-check"
      color="primary"
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

<style lang="scss">
.v-input .v-messages {
  min-height: 0px !important;
}
</style>

<template>
  <div class="categories-filter pa-3">
    <v-radio-group :value="value" @change="value => $emit('check', value)">
      <v-radio
        v-for="item in categories"
        :key="item.id"
        color="primary"
        class="mb-2 category-check"
        :label="item.name"
        :value="item.id"
      ></v-radio>
    </v-radio-group>
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
      type: [Number, String],
      default: 0
    }
  }
};
</script>

<style lang="scss"></style>

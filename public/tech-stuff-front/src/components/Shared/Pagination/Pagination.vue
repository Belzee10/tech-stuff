<template>
  <v-pagination
    :value="value"
    :length="length"
    :total-visible="totalVisible"
    @input="v => $emit('input', v)"
    @next="$emit('next')"
    @previous="$emit('previous')"
  ></v-pagination>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    length: {
      type: Number,
      default: 0
    },
    totalVisible: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped></style>

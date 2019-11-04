<template>
  <div class="product">
    <product-details />
  </div>
</template>

<script>
import ProductDetails from '@/components/Products/ProductDetails';

export default {
  name: 'Product',
  components: { ProductDetails }
};
</script>

<style lang="scss" scoped></style>

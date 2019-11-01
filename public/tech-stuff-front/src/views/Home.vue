<template>
  <div class="home">
    <products-categories />
  </div>
</template>

<script>
import ProductsCategories from '@/components/Products/ProductsCategories';

export default {
  name: 'Home',
  components: { ProductsCategories }
};
</script>

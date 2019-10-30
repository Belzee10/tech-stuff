<template>
  <div>
    <app-bar />
    <navigation-draw />
  </div>
</template>

<script>
import AppBar from '../AppBar';
import NavigationDraw from '../NavigationDraw';
export default {
  name: 'Navbar',
  components: { AppBar, NavigationDraw }
};
</script>

<style lang="scss" scoped></style>

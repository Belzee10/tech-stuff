<template>
  <v-app-bar app color="primary" dark dense tile>
    <div class="mr-2">
      <v-img src="../../../assets/logo.png" height="30" width="30" contain />
    </div>
    <v-toolbar-title>Page title</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  props: {
    userOptions: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped></style>
